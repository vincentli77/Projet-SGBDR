import { Request, Response } from "express";
import { checkUptime } from "../services/ssh.service";

export const sshConnection = async (req: Request, res: Response): Promise<void> => {
	const { host, port, username } = req?.body ?? {};

	if (!host || !port || !username) {
		res.status(401).send(
			`Error : Missing inputs -> ${!host ? "host " : ""}${!port ? "port " : ""}${!username ? "username " : ""}`,
		);
		return;
	}

	const status = await checkUptime({ host, port, username });

	if (status.error) {
		res.status(500).send(`Error : Wrong ssh credentials -> ${status.error}`);
		return;
	}

	res.status(200).send(status);
};
