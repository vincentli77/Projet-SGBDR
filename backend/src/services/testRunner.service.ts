import { EvaluationTestParams, EvaluationTestResult } from "../interfaces/evaluation.interface";
import { Client } from "ssh2";

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
	connection,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	const _connection = connection ?? new Client();
	const status: EvaluationTestResult = { isSuccess: false };

	if (!stdin || !stdout) return status;

	_connection.exec(stdin, (error, channel) => {
		if (error) status.error = error.message;

		channel.on("close", () => _connection.end());

		channel
			.on("data", (data: string) => {
				if (String(data) === stdout) status.isSuccess = true;
			})
			.stderr.on("error", (error) => (status.error = error.message));
	});

	return status;
};
