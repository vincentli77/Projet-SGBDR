import jwt from "jsonwebtoken";

export const generateAccessToken = (email: string) => {
	return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "15m" });
};