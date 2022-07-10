import { verifyIfIpIsValidOnRemoteSession } from "../index";

export const exercice04 = async (): Promise<boolean> => {
	const test01 = await verifyIfIpIsValidOnRemoteSession({
		stdin: "bash checkip.sh 0.0.0.0",
		stdout: "true\n",
	});
	const test02 = await verifyIfIpIsValidOnRemoteSession({
		stdin: "bash checkip.sh 255.255.255.255",
		stdout: "true\n",
	});
	const test03 = await verifyIfIpIsValidOnRemoteSession({
		stdin: "bash checkip.sh 256.256.256.256",
		stdout: "false\n",
	});
	const test04 = await verifyIfIpIsValidOnRemoteSession({
		stdin: "bash checkip.sh 1.2.4",
		stdout: "false\n",
	});
	const test05 = await verifyIfIpIsValidOnRemoteSession({
		stdin: "bash checkip.sh 0.0.0.0.0",
		stdout: "false\n",
	});

	if (test01.isSuccess && test02.isSuccess && test03.isSuccess && test04.isSuccess && test05.isSuccess) return true;

	return false;
};
