import { createEmailTemplate } from "../services/mail.service";

export const transportConfig = {
	service: process.env.MAILSERVICE,
	port: Number(String(process.env.MAILPORT)),
	auth: {
		user: process.env.SENDERMAIL,
		pass: process.env.MAILPASSWORD, //the actual password for that account
	},
};

export const mailOptions = (email: string, token: string) => {
	return {
		from: process.env.SENDERMAIL,
		html: createEmailTemplate(email, new URL(`${process.env.FRONT_URL}?token=${token}`)),
		subject: "Your Magic Link",
		to: email,
	};
};
