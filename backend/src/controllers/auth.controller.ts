import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { transport } from "../services/mail.service";
import { generateAccessToken, generateRefreshToken } from "../services/auth/jwt.service";
import { mailOptions } from "../config/mail.config";
import { MailProvider } from "../interfaces/user.interface";

export const mailProvider = async (req: Request<{}, {}, MailProvider>, res: Response): Promise<void> => {
	const body = req.body;
	const accessToken = generateAccessToken(body.email);

	if (!body.email) {
		res.status(404).send({
			message: "You didn't enter a valid email address.",
		});
	}

	transport.sendMail(mailOptions(body.email, accessToken), (error) => {
		if (error) {
			console.log(error);
			return res.status(404).send("Cant'send email");
		}

		res.status(200).send(`Magic link sent. : http://localhost:3000/refresh?token=${accessToken}`);
	});
};

// Fonction appeler apres cliqué sur le lien pour générer  le refresh token
export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers["authorization"];
	const accessToken = authHeader && authHeader.split(" ")[1];

	if (!accessToken) {
		res.status(403).send("Can't verify user.").redirect("/");
		return;
	}

	jwt.verify(accessToken, process.env.TOKEN_SECRET_KEY, (err: any) => {
		if (err) {
			res.status(403).send("Invalid auth credentials.");
			return;
		}

		const data = jwt.decode(accessToken) as JwtPayload;
		const refreshToken = generateRefreshToken(data.email);

		res.status(200).send({ accessToken: accessToken, refreshToken }).redirect("/login");
	});
};

// generer un nouvel acces token à partir d'un refresh token valide
export const accessToken = (req: Request, res: Response) => {
	const authHeader = req.headers["authorization"];
	const refreshToken = authHeader && authHeader.split(" ")[1];

	jwt.verify(refreshToken, process.env.TOKEN_SECRET_KEY, (err: any) => {
		if (err) {
			res.status(403).send("Invalid auth credentials.").redirect("/login");
			return;
		}

		const accessToken = generateAccessToken(req.body.email);
		res.status(200).send({ accessToken: accessToken });
	});
};
