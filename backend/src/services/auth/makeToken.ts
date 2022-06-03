import jwt from "jsonwebtoken";

export const makeToken = (email: string) => {
	const expirationDate = new Date();
	expirationDate.setHours(new Date().getHours() + 1);
	return jwt.sign({ email }, process.env.SECRET_KEY);
};
