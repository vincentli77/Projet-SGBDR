import { sshUserConfig } from "../config/ssh.config";
import { Client } from "ssh2";
import { SshUserConfig, Uptime } from "../interfaces/ssh";

/** -- Used to verify the connection with the remote server
 * It connects to a remote server via SSH, and returns a status object with a boolean value indicating
 * whether the connection was successful or not
 * @param {SshUserConfig} userConfig - SshUserConfig
 * @returns A promise that resolves to an object of type Uptime.
 */
export const uptimeService = async (userConfig: SshUserConfig): Promise<Uptime> => {
	const connection = new Client();

	const config = sshUserConfig(userConfig);

	const status: Uptime = { connected: false };

	return await new Promise<Uptime>((resolve, reject) => {
		connection
			.on("ready", () => {
				status.connected = true;
				connection.end();
			})
			.on("error", (error) => {
				reject({ ...status, error: error.level });
			})
			.on("end", () => {
				resolve(status);
			})
			.connect(config);
	});
};
