import mysql, { ConnectionConfig } from "mysql";
import config from "../config/database.config";

const params: ConnectionConfig = {
	host: config.mysql.host,
	port: config.mysql.port,
	database: config.mysql.database,
	user: config.mysql.user,
	password: config.mysql.password,
};

const Connect = async (): Promise<mysql.Connection> =>
	new Promise<mysql.Connection>((resolve, reject) => {
		const connection = mysql.createConnection(params);

		connection.connect((error) => {
			if (error) {
				reject(error);
				return;
			}

			resolve(connection);
		});
	});

const Query = async (connection: mysql.Connection, query: string): Promise<any> =>
	new Promise((resolve, reject) => {
		connection.query(query, connection, (error, result) => {
			if (error) {
				reject(error);
				return;
			}

			resolve(result);
		});
	});

export { Connect, Query };
