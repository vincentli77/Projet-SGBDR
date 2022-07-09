export interface SshUserConfig {
	host: string;
	port: number;
	username: string;
}

export interface IConfig extends SshUserConfig {
	privateKey: Buffer;
}

export interface Uptime {
	connected: boolean;
	error?: string;
}

export interface ICheckChallenge {
	pass: boolean;
	error?: string;
}

export interface IParams {
	stdin: string;
	stdout: string;
}
