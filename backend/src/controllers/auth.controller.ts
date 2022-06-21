import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { transport } from "../services/mail.service";
import { generateAccessToken,generateRefreshToken } from "../services/auth/jwt.service";
import { mailOptions } from "../config/mail.config";
import { MailAuth } from "../interfaces/user.interface";



export const mailAuth = async (req: Request<{}, {}, MailAuth>, res: Response): Promise<void> => {
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

export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers["authorization"];
	// const token = authHeader && authHeader.split(" ")[1];
	const token = authHeader


	if (!token) {
		res.status(403).send("Can't verify user.").redirect("/");
		return;
	}

	
	 jwt.verify(token, process.env.SECRET_KEY, (err: any) => {
		
		if (err) {
			res.status(403).send("Invalid auth credentials.");
			return;
		}

		const data = jwt.decode(token) as JwtPayload;
	
		const refreshToken = generateRefreshToken(data.email);
		res.status(200).send(" Verify user."+ refreshToken).redirect("/dashboard");
		return;
		next();
	});
	
};

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
	if (!req.body.token) {
		res.status(403).send("Can't verify user.").redirect("/");
		return;
	}

	 jwt.verify(req.body.token, process.env.SECRET_KEY, (err: any) => {
		
	if (err) {
			res.status(403).send("Invalid auth credentials.");
			return;
		}
		
		res.status(200).send(" Verify user.");
		return;
		next();
	});
	
};
