import { createTransport } from "nodemailer";
import { URL } from "url";
import { transportConfig } from "../config/mail.config";

export const transport = createTransport(transportConfig);

export const createEmailTemplate = (username: string, link: URL) => `
  <h2>Hey ${username}</h2>
  <p>Here's the login link you just requested:</p>
  <p>${link}</p>
`;
