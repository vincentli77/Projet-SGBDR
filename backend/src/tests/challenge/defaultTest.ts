export interface ICallback {
	isSuccess: boolean;
	error?: string;
}

export const defaultTest = (callback: ICallback): void => {
	it("Verify if hello.txt file exist on the remote session.", () => {
		expect(callback).toBe({ isSuccess: true });
	});
};
