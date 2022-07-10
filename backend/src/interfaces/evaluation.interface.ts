import { Client } from "ssh2";

export interface EvaluationTestParams {
	connection?: Client;
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
