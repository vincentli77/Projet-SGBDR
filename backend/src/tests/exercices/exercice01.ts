import { SshUserConfig } from "../../interfaces/ssh";
import { verifyIfFileExistOnRemoteSession } from "../index";

export const exercice01 = async (userConfig: SshUserConfig): Promise<boolean> => {
	const test01 = await verifyIfFileExistOnRemoteSession({
		userConfig,
		stdin: "ls hello.txt",
		stdout: "hello.txt\n",
	});

	if (test01.isSuccess) return true;

	return false;
};
