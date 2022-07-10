import { testRunnerService } from "../services/testRunner.service";
import { EvaluationTestParams, EvaluationTestResult } from "../interfaces/evaluation.interface";

export const verifyIfFileExistOnRemoteSession = ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ userConfig, stdin, stdout });
};

export const countJsFileOnRemoteSession = ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ userConfig, stdin, stdout });
};

export const convertInMsOnRemoteSession = ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ userConfig, stdin, stdout });
};

export const verifyIfIpIsValidOnRemoteSession = ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ userConfig, stdin, stdout });
};

export const findSmallestNumberOnRemoteSession = ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => {
	return testRunnerService({ userConfig, stdin, stdout });
};
