import { Request, Response } from "express";
import { transport } from "../services/mail.service";
import { createToken } from "../services/auth/jwt.service";
import { isAuthenticated } from "./isAuthenticated";
import { mailOptions } from "../config/mail.config";

interface mailAuth {
	email: string;
}

export const mailAuth = async (req: Request<{}, {}, mailAuth>, res: Response): Promise<void> => {
	const body = req.body;
	const token = createToken(body.email);

	if (!body.email) {
		res.status(404).send({
			message: "You didn't enter a valid email address.",
		});
	}

	transport.sendMail(mailOptions(body.email, token), (error) => {
		if (error) {
			console.log(error);
			return res.status(404).send("Cant'send email");
		}

		res.status(200).send(`Magic link sent. : http://localhost:3000/connected?token=${token}`);
	});
};

export const connected = async (req: Request, res: Response): Promise<void> => {
	isAuthenticated(req, res);
};