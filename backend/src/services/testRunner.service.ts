import { Client } from "ssh2";
import { sshUserConfig } from "../config/ssh.config";
import { EvaluationTestParams, EvaluationTestResult } from "../interfaces/evaluation.interface";

/** -- Used to provide a ssh context to the tests
 * It takes a connection, a string of code to run, and a string of expected output. It then runs the
 * code and checks the output against the expected output
 * @param {Client} connection - Client - The SSH connection to the server.
 * @param {string} stdin - The code that the user has written.
 * @param {string} stdout - The expected output of the code
 * @returns A function that takes in a connection, stdin, and stdout and returns a promise that
 * resolves to an EvaluationTestResult.
 */
export const testRunnerService = async ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	const _connection = new Client();

	const status: EvaluationTestResult = { isSuccess: false };

	const config = sshUserConfig(userConfig);

	if (!stdin || !stdout) return status;

	return await new Promise<EvaluationTestResult>((resolve, reject) => {
		_connection
			.on("ready", () => {
				_connection.exec(stdin, (error, channel) => {
					if (error) reject({ ...status, error: error.message });

					channel.on("close", () => _connection.end());

					channel
						.on("data", (data: string) => {
							if (String(data) === stdout) resolve({ ...status, isSuccess: true });
						})
						.stderr.on("data", (data) => reject({ ...status, error: String(data) }));

					_connection.end();
				});
			})
			.connect(config);
	});
};
