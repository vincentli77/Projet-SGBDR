import { Request, Response } from "express";
import { checkUptime } from "../services/ssh.service";

export const sshConnection = async (req: Request, res: Response): Promise<void> => {
  const { host, port, username } = req?.body ?? {};

  // TODO: [urgent, not urgent] implement error message
  if(!host || !port || !username) return;

  const status = await checkUptime({ host, port, username })

  // If no status
  if(!status) return

  res.status(200).send('Yeah!')
};
