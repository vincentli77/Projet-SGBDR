import { testRunnerService } from "../services/testRunner.service";
import { EvaluationTestParams, EvaluationTestResult } from "../interfaces/evaluation.interface";

export const verifyIfFileExistOnRemoteSession = ({
	connection,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ connection, stdin, stdout });
};

export const countJsFileOnRemoteSession = ({
	connection,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ connection, stdin, stdout });
};

export const convertInMsOnRemoteSession = ({
	connection,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ connection, stdin, stdout });
};

export const verifyIfIpIsValidOnRemoteSession = ({
	connection,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ connection, stdin, stdout });
};

export const findSmallestNumberOnRemoteSession = ({
	connection,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ connection, stdin, stdout });
};
