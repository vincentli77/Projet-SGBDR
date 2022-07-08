import { IParams } from "../interfaces/ssh";
import { sshService } from "../services/ssh-challenge01.service";

import { Client } from "ssh2";

interface ICallBack {
	isSuccess: boolean;
	error?: string;
}

const connection = new Client();

export const verifyIfFileExistOnRemoteSession = (params: IParams) => {
	return sshService(connection, "command", "result");
};

export const countJsFileOnRemoteSession = (params: IParams) => {
	return sshService(connection, "command", "result");
};

export const convertInMsOnRemoteSession = (params: IParams) => {
	return sshService(connection, "command", "result");
};

export const verifyIfIpIsValidOnRemoteSession = (params: IParams) => {
	return sshService(connection, "command", "result");
};

export const findSmallestNumberOnRemoteSession = (params: IParams) => {
	return sshService(connection, "command", "result");
};
