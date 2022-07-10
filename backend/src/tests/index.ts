import { testRunnerService } from "../services/testRunner.service";
import { EvaluationTestParams, EvaluationTestResult } from "../interfaces/evaluation.interface";

export const verifyIfFileExistOnRemoteSession = async ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => await testRunnerService({ userConfig, stdin, stdout });

export const countJsFileOnRemoteSession = async ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => await testRunnerService({ userConfig, stdin, stdout });

export const convertInMsOnRemoteSession = async ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => await testRunnerService({ userConfig, stdin, stdout });

export const verifyIfIpIsValidOnRemoteSession = async ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => await testRunnerService({ userConfig, stdin, stdout });

export const findSmallestNumberOnRemoteSession = async ({
	userConfig,
	stdin,
	stdout,
}: EvaluationTestParams): Promise<EvaluationTestResult> => await testRunnerService({ userConfig, stdin, stdout });
