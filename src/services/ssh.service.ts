import { sshUserConfig } from '../configs/ssh.config';
import { Client } from 'ssh2';
import { IUserConfig } from '../interfaces/ssh';

interface ICheckUptime {
  connected: boolean;
  message?: string;
}


export const checkUptime = async (userConfig: IUserConfig): ICheckUptime => {
  const connection = new Client();

  const config = sshUserConfig(userConfig);

  // TODO: [not urgent, not urgent] find better name
  const _: ICheckUptime = {
    connected: false,
  };

  connection
    .on("ready", async () => {
      _.connected = true;
    })
    .on("error", (err) => {
      _.message = `${err.level} ${err?.description}`;
      connection.end();
    })
    .on("end", () => connection.end())
    .connect(config);

  // TODO: [urgent, not urgent] find a way to return after connection success  
  return _;
};
