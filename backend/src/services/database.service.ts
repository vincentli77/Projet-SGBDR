import mysql, { ConnectionConfig } from "mysql";
import config from "../config/database.config";

const params: ConnectionConfig = {
	host: config.mysql.host,
	port: config.mysql.port,
	database: config.mysql.database,
	user: config.mysql.user,
	password: config.mysql.password,
};

/**
 * It creates a new connection to the database, and returns a promise that resolves to the connection
 * if it succeeds, or rejects with an error if it fails
 */
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

/**
 * It's a wrapper for the `connection.query` function that returns a promise instead of using a
 * callback
 * @param connection - mysql.Connection - The connection to the database.
 * @param {string} query - The query you want to run.
 * @param [values] - The values to be inserted into the query.
 */
const Query = async (
	connection: mysql.Connection,
	query: string,
	values?: mysql.QueryOptions["values"],
): Promise<any> =>
	new Promise((resolve, reject) => {
		connection.query(query, values, (error, result) => {
			if (error) {
				reject(error);
				return;
			}

			resolve(result);
		});
	});

export { Connect, Query };
