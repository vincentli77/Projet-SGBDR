import jwt from "jsonwebtoken";

/**
 * It takes an email as an argument and returns a JWT token that expires in 15 minutes
 * @param {string} email - The email of the user that we want to generate the token for.
 * @returns A string that is the access token.
 */
export const generateAccessToken = (email: string) => {
	return jwt.sign({ email }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN });
};

export const generateRefreshToken = (email: string) => {
	return jwt.sign({ email }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });
};
