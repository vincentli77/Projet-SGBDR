import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.post("/ssh", controller.sshConnection);
index.post("/login", controller.mailAuth);
index.get("/refresh", controller.refreshToken);
index.post("/authenticate", controller.authenticate);
index.get("/");
