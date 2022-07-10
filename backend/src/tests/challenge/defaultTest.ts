import { EvaluationTestResult } from "../../interfaces/evaluation.interface";

export const defaultTest = (callback: Promise<EvaluationTestResult>): void => {
	it("Verify if hello.txt file exist on the remote session.", () => {
		expect(callback).toBe({ isSuccess: true });
	});
};
