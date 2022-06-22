import { sshUserConfig } from "../config/ssh.config";
import { Client } from "ssh2";
import { IUserConfig, ICheckUptime } from "../interfaces/ssh";

export const checkUptime = async (userConfig: IUserConfig): Promise<ICheckUptime> => {
	const connection = new Client();

	const config = sshUserConfig(userConfig);

	const status: ICheckUptime = {
		connected: false,
	};

	return await new Promise<ICheckUptime>((resolve) => {
		connection
			.on("ready", () => {
				status.connected = true;
				connection.end();
			})
			.on("error", (error) => {
				status.error = `${error.level}`;
				resolve(status);
			})
			.on("end", () => {
				resolve(status);
			})
			.connect(config);
	});
};
