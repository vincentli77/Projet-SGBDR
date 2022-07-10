import { convertInMsOnRemoteSession } from "../index";

export const exercice03 = async (): Promise<boolean> => {
	const test01 = await convertInMsOnRemoteSession({
		stdin: "bash clock.sh 24 60 60",
		stdout: "90060000\n",
	});

	const test02 = await convertInMsOnRemoteSession({
		stdin: "bash clock.sh 1 1 156789789",
		stdout: "156793449000\n",
	});

	const test03 = await convertInMsOnRemoteSession({
		stdin: "bash clock.sh 514 1 2",
		stdout: "1850462000\n",
	});

	if (test01.isSuccess && test02.isSuccess && test03.isSuccess) return true;

	return false;
};
