import { readFileSync } from "fs";
import path from "path";
import { IUserConfig, IConfig } from "../interfaces/ssh";

export const sshUserConfig = (config: IUserConfig): IConfig => {
	return {
		host: config.host,
		port: config.port,
		username: config.username,
		privateKey: readFileSync(path.resolve(__dirname, "../../id_rsa")),
	};
};
