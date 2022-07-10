import { verifyIfFileExistOnRemoteSession } from "../index";

export const exercice01 = async (): Promise<boolean> => {
	const test01 = await verifyIfFileExistOnRemoteSession({
		stdin: "ls hello.txt",
		stdout: "hello.txt\n",
	});

	if (test01.isSuccess) return true;

	return false;
};
