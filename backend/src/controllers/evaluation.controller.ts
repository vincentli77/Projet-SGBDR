import { Request, Response } from "express";
import { StateMachineContext } from "../helpers/tests.sequencer";
import { waitFor } from "xstate/lib/waitFor";
import { SshUserConfig } from "../interfaces/ssh";
import { sequencerService } from "../services/sequencer.service";

interface ReqBody extends SshUserConfig {
	user: {
		email: string;
		promotion_name: string;
		challenge_name: string;
	};
}

interface _Response extends StateMachineContext {
	succeedExercices: string[];
}

export const evaluationFlow = async (req: Request<unknown, unknown, ReqBody>, res: Response): Promise<void> => {
	const { host, port, username, user } = req?.body ?? {};

	if (!host || !port || !username) {
		res.status(401).send(
			`Error : Missing inputs -> ${!host ? "host " : ""}${!port ? "port " : ""}${!username ? "username " : ""}`,
		);
		return;
	}

	const sequencer = sequencerService({ host, port, username }, user);

	let response: _Response = { ...sequencer.state.context, succeedExercices: [] };

	try {
		await waitFor(sequencer, (state) => state.matches("disconnected"), { timeout: 15000 });

		sequencer.onTransition((state) => {
			if (state.event.type === "done.invoke.uptime") {
				response = {
					...response,
					score: state.context.score,
					isConnected: state.context.isConnected,
				};
			}

			if (state.event.type === "error.platform.uptime") {
				response = {
					...response,
					score: state.context.score,
					errorMessage: state.context.errorMessage,
					isConnected: state.context.isConnected,
				};
			}
		});

		["exercice01", "exercice02", "exercice03", "exercice04", "exercice05"].forEach(async (exercice) => {
			try {
				await waitFor(sequencer, (state) => state.matches(exercice), { timeout: 25000 });

				sequencer.send("TEST_DOING");

				sequencer.onTransition((state) => {
					if (state.event.type === `done.invoke.${exercice}`) {
						response = {
							...response,
							score: state.context.score,
							succeedExercices: [...response.succeedExercices, exercice],
						};
					}

					if (state.event.type === `error.platform.${exercice}`) {
						response = {
							...response,
							score: state.context.score,
							errorMessage: state.context.errorMessage,
						};
					}
				});
			} catch (error) {}
		});

		sequencer.onChange((state) => {
			if (state.errorMessage) res.status(200).send(response);
		});

		sequencer.onDone((event) => {
			if (event.type === "done.invoke.assessment-tests-sequencer") {
				res.status(200).send(response);
			}
		});
	} catch (error) {}
};
