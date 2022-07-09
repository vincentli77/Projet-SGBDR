import { IParams } from "../interfaces/ssh";
import { sshService } from "../services/ssh-challenge01.service";

import { Client } from "ssh2";
import { EvaluationTestResult } from "../interfaces/evaluation.interface";

const connection = new Client();

export const verifyIfFileExistOnRemoteSession = (params: IParams): EvaluationTestResult => {
	return sshService(connection, "command", "result");
};

export const countJsFileOnRemoteSession = (params: IParams): EvaluationTestResult => {
	return sshService(connection, "command", "result");
};

export const convertInMsOnRemoteSession = (params: IParams): EvaluationTestResult => {
	return sshService(connection, "command", "result");
};

export const verifyIfIpIsValidOnRemoteSession = (params: IParams): EvaluationTestResult => {
	return sshService(connection, "command", "result");
};

export const findSmallestNumberOnRemoteSession = (params: IParams): EvaluationTestResult => {
	return sshService(connection, "command", "result");
};
