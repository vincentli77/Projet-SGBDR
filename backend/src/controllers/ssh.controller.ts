import { Request, Response } from "express";
import { waitFor } from "xstate/lib/waitFor";
import { sequencerService } from "../services/sequencer.service";

interface ReqBody extends SshUserConfig {
	event: {
		name: string;
		state: ReadonlyArray<string>;
	};
}

export const evaluationFlow = async (req: Request<unknown, unknown, ReqBody>, res: Response): Promise<void> => {
	const { host, port, username, event } = req?.body ?? {};

	if (!host || !port || !username) {
		res.status(401).send(
			`Error : Missing inputs -> ${!host ? "host " : ""}${!port ? "port " : ""}${!username ? "username " : ""}`,
		);
		return;
	}

	const sequencer = sequencerService({ host, port, username });

	try {
		!!event.state &&
			event.state.forEach(async (eventState: ReadonlyArray<string>) => {
				await waitFor(sequencer, (state) => state.matches(eventState), { timeout: 20000 });

				sequencer.send(event.name);
			});
	} catch (error) {
		// Restart the machine
		sequencer.start();
		res.status(500).send("Ooups. Server Error. Restarting...");
	}
};
