import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { transport } from "../services/mail.service";
import { generateAccessToken, generateRefreshToken } from "../services/auth/jwt.service";
import { mailOptions } from "../config/mail.config";
import { MailProvider } from "../interfaces/user.interface";

export const mailProvider = async (
	req: Request<Record<string, unknown>, Record<string, unknown>, MailProvider>,
	res: Response,
): Promise<void> => {
	const body = req.body;
	const accessToken = generateAccessToken(body.email);

	if (!body.email) {
		res.status(404).send({
			message: "You didn't enter a valid email address.",
		});
	}

	transport.sendMail(mailOptions(body.email, accessToken), (error) => {
		if (error) {
			return res.status(404).send({ error, message: "Cant'send email" });
		}

		res.status(200).send(`Magic link sent. : http://localhost:3000/refresh?token=${accessToken}`);
	});
};

/**
 * It verifies the access token, generates a new refresh token, and sends both tokens back to the
 * client
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response - the response object that will be sent back to the client
 * @param {NextFunction} next - NextFunction - This is a function that will be called when the
 * middleware is done.
 * @returns The access token and refresh token are being returned.
 */
export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers["authorization"];
	const accessToken = authHeader && authHeader.split(" ")[1];

	if (!accessToken) {
		res.status(403).send("Can't verify user.").redirect("/");
		return;
	}

	jwt.verify(accessToken, process.env.TOKEN_SECRET_KEY, (error: any) => {
		if (error) {
			res.status(403).send({ error, message: "Invalid auth credentials." });
			return;
		}

		const data = jwt.decode(accessToken) as JwtPayload;
		const refreshToken = generateRefreshToken(data.email);

		res.status(200).send({ accessToken, refreshToken }).redirect("/login");
	});
};

/**
 * It verifies the refresh token, and if it's valid, it generates a new access token and sends it back
 * to the client
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response - The response object that will be sent back to the client.
 */
export const accessToken = (req: Request, res: Response) => {
	const authHeader = req.headers["authorization"];
	const refreshToken = authHeader && authHeader.split(" ")[1];

	jwt.verify(refreshToken, process.env.TOKEN_SECRET_KEY, (error: any) => {
		if (error) {
			res.status(403).send({ error, message: "Invalid auth credentials." }).redirect("/login");
			return;
		}

		const accessToken = generateAccessToken(req.body.email);
		res.status(200).send({ accessToken: accessToken });
	});
};
