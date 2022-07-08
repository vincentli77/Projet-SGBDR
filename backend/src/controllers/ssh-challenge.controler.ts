import { Request, Response } from "express";
import { checkChallenge } from "../services/ssh-challenge.service";

export const sshCheckChallenge = async (req: Request, res: Response): Promise<void> => {
	const { host, port, username } = req?.body ?? {};

	if (!host || !port || !username) {
		res.status(401).send(`Error : Missing inputs -> ${!host ? "host " : ""}${!port ? "port " : ""}${!username ? "username " : ""}`);
		return;
	}

	const status = await checkChallenge({ host, port, username });

	if (status.error) {
		res.status(500).send(`Error : ${status.error}`);
		return;
	}

	res.status(200).send(status);
};
