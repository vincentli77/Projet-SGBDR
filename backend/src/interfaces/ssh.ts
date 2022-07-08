export interface IUserConfig {
	host: string;
	port: number;
	username: string;
}

export interface IConfig extends IUserConfig {
	privateKey: Buffer;
}

export interface ICheckUptime {
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
