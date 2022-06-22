import jwt from "jsonwebtoken";

export const generateAccessToken = (email: string) => {
	return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN });
};

export const generateRefreshToken = (email: string) => {
	return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });
};
