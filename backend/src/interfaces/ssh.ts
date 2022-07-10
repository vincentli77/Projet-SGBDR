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
