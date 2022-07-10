import { countJsFileOnRemoteSession } from "../index";

export const exercice02 = async (): Promise<boolean> => {
	const test01 = await countJsFileOnRemoteSession({
		stdin: "ls hello.txt",
		stdout: "hello.txt\n",
	});

	if (test01.isSuccess) return true;

	return false;
};
