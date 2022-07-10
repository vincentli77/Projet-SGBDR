import { SshUserConfig } from "./ssh";

export interface EvaluationTestParams {
	userConfig?: SshUserConfig;
	stdin: string;
	stdout: string;
}
export interface EvaluationTestResult {
	isSuccess: boolean;
	error?: string;
}

export interface EvaluationResult {
	evaluationTestFunction: () => EvaluationTestResult;
	transition: { name: "test01" | "test02" | "test03" | "test04" | "test05" | "connection" };
}
