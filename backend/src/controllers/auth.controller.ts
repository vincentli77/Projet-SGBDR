/* eslint-disable @typescript-eslint/semi */
import { Request, Response } from 'express'
import { makeToken } from '../services/auth/makeToken'
import { emailTemplate } from "../services/auth/emailTemplate";
import { createTransport } from "nodemailer"
import { isAuthenticated } from "../services/auth/isAuthenticated";



export const magicLink = async (req: Request, res: Response): Promise<void> => {
   const body = req.body;   
  if (!body.email) {
    res.status(404);
    res.send({
      message: "You didn't enter a valid email address.",
    });
  }
const token = makeToken(body.email);
  
const transport = createTransport({
    service: "hotmail",
    port: 465,
    auth: {
        user: process.env.SENDERMAIL,
        pass: process.env.MAILPASSWORD, //the actual password for that account
    },
});
  const mailOptions = {
    from: process.env.SENDERMAIL,
    html: emailTemplate(
      body.email,
      `http://localhost:3000/connected?token=${token}`,
    ),
    subject: "Your Magic Link",
    to: 'li.jiajinvincent1997@gmail.com',
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
}


export const connected = async (req: Request, res: Response): Promise<void> => {
  isAuthenticated(req ,res)
  
}
