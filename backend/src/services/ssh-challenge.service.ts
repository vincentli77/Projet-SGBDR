// import { sshUserConfig } from "../config/ssh.config";
// import { Client } from "ssh2";
// import { IUserConfig, ICheckChallenge } from "../interfaces/ssh";

// export const checkChallenge01 = async (userConfig: IUserConfig): Promise<ICheckChallenge> => {
// 	const connection = new Client();

// 	const config = sshUserConfig(userConfig);

// 	const status: ICheckChallenge = {
// 		pass: false,
// 	};

// 	return await new Promise<ICheckChallenge>((resolve) => {
// 		const challengeCommand = "ls hello.txt";
// 		const challengeAnswer = "hello.txt\n";

// 		connection
// 			.on("ready", () => {
// 				connection.exec(challengeCommand, (error, stream) => {
// 					if (error) {
// 						throw error;
// 					}
// 					stream
// 						.on("close", () => {})
// 						.on("data", (data: string) => {
// 							if (data.toString() == challengeAnswer) {
// 								status.pass = true;
// 							}
// 						})
// 						.stderr.on("data", (data) => {
// 							status.error = data.toString();
// 						});
// 					connection.end();
// 				});
// 			})
// 			.on("error", (error) => {
// 				status.error = `${error.level}`;
// 				resolve(status);
// 			})
// 			.on("end", () => {
// 				resolve(status);
// 			})
// 			.connect(config);
// 	});
// };

import { Client } from "ssh2";

interface ICallBack {
	isSuccess: boolean;
	error?: string;
}

export const sshService = (connection: Client, stdin: string, stdout: string): ICallBack => {
	const status: ICallBack = { isSuccess: false };

	connection.exec(stdin, (error, channel) => {
		if (error) status.error = error.message;

		channel.on("close", () => connection.end());

		channel
			.on("data", (data: string) => {
				if (String(data) === stdout) status.isSuccess = true;
			})
			.stderr.on("error", (error) => (status.error = error.message));
	});

	return status;
};

const connection = new Client();
