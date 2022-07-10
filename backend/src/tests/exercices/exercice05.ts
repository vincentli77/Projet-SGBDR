import { findSmallestNumberOnRemoteSession } from "../index";

export const exercice05 = async (): Promise<boolean> => {
	const test01 = await findSmallestNumberOnRemoteSession({
		stdin: "bash smallest.sh 261235",
		stdout: "126235 2 0\n",
	});
	const test02 = await findSmallestNumberOnRemoteSession({
		stdin: "bash smallest.sh 209917",
		stdout: "29917 0 1\n",
	});
	const test03 = await findSmallestNumberOnRemoteSession({
		stdin: "bash smallest.sh 285365",
		stdout: "238565 3 1\n",
	});

	if (test01.isSuccess && test02.isSuccess && test03.isSuccess) return true;

	return false;
};
