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