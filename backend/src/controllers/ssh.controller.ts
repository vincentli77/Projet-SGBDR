import { Request, Response } from "express";
import { sequencerService } from "../services/sequencer.service";

export const evaluationFlow = async (req: Request, res: Response): Promise<void> => {
	const { host, port, username, event } = req?.body ?? {};

	if (!host || !port || !username) {
		res.status(401).send(
			`Error : Missing inputs -> ${!host ? "host " : ""}${!port ? "port " : ""}${!username ? "username " : ""}`,
		);
		return;
	}

	const interpreter = sequencerService({ host, port, username });

	// interpreter.send("TEST_DOING");
};
