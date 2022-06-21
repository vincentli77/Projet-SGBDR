import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { transport } from "../services/mail.service";
import { generateAccessToken } from "../services/auth/jwt.service";
import { mailOptions } from "../config/mail.config";
import { MailAuth } from "../interfaces/user.interface";

export const mailAuth = async (req: Request<{}, {}, MailAuth>, res: Response): Promise<void> => {
	const body = req.body;
	const token = generateAccessToken(body.email);

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

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		res.status(403).send("Can't verify user.").redirect("/");
		return;
	}

	jwt.verify(token, process.env.SECRET_KEY, (err: any) => {
		
		if (err) {
			res.status(403).send("Invalid auth credentials.");
			return;
		}

		console.log(req);

		next();
	});
};
