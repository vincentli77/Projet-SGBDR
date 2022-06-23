import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.post("/ssh", controller.sshConnection);
index.post("/mailProvider", controller.mailProvider);
index.post("/refreshToken", controller.refreshToken);
index.get("/accessToken", controller.accessToken);
index.get("/login", controller.login);
index.get("/findAllUsers", controller.findAllUsers);
index.get("/createUsers", controller.createUsers);
index.get("/findAllUsersByPromo", controller.findAllUsersByPromo);

index.get("/");
