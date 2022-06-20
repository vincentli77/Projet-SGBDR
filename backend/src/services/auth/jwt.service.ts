import jwt from "jsonwebtoken";

export const createToken = (email: string) => {
	const expirationDate = new Date().setHours(new Date().getHours() + 1);
	return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: expirationDate });
};