import { Request, Response } from "express";
import { checkUptime } from "../services/ssh.service";

export const sshConnection = async (req: Request, res: Response): Promise<void> => {
  const { host, port, username } = req?.body ?? {};

  // TODO: [urgent, not urgent] implement error message
  if(!host || !port || !username) return;

  console.log(checkUptime({ host, port, username }));
};
