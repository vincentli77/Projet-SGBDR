import { SshUserConfig } from "../../interfaces/ssh";
import { countJsFileOnRemoteSession } from "../index";

export const exercice02 = async (userConfig: SshUserConfig): Promise<boolean> => {
	const test01 = await countJsFileOnRemoteSession({
		userConfig,
		stdin: "bash find.sh",
		stdout: "15979\n",
	});

	if (test01.isSuccess) return true;

	return false;
};
