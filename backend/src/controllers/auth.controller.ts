/* eslint-disable @typescript-eslint/semi */
import { Request, Response } from "express";
import { makeToken } from "../services/auth/makeToken";
import { emailTemplate } from "../templates/emailTemplate";
import { createTransport } from "nodemailer";
import { isAuthenticated } from "./isAuthenticated";
import { errorHandler } from "../middlewares/errorHandler";
import { log } from "console";

interface MagicLink {
	email: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const magicLink = async (req: Request<{}, {}, MagicLink>, res: Response): Promise<void> => {
	const body = req.body;
	if (!body.email) {
		res.status(404);
		res.send({
			message: "You didn't enter a valid email address.",
		});
	}
	const token = makeToken(body.email);

	const transport = createTransport({
		service: process.env.MAILSERVICE,
		port: Number(String(process.env.MAILPORT)),
		auth: {
			user: process.env.SENDERMAIL,
			pass: process.env.MAILPASSWORD, //the actual password for that account
		},
	});
	const mailOptions = {
		from: process.env.SENDERMAIL,
		html: emailTemplate(body.email, `http://localhost:3000/connected?token=${token}`),
		subject: "Your Magic Link",
		to: body.email,
	};
	return transport.sendMail(mailOptions, (error) => {
		if (error) {
			console.log(error);
			res.status(404);
			res.send("Can't send email.");
		} else {
			res.status(200);
			res.send(`Magic link sent. : http://localhost:3000/connected?token=${token}`);
		}
	});
};

export const connected = async (req: Request, res: Response): Promise<void> => {
	isAuthenticated(req, res);
};
