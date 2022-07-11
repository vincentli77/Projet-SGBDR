import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.post("/ssh", controller.sshConnection);

//auth
index.post("/mailProvider", controller.mailProvider);
index.post("/refreshToken", controller.refreshToken);
index.get("/accessToken", controller.accessToken);
//crud users
index.get("/users", controller.getUsers);
index.post("/user/create", controller.createUser);
index.get("/usersPromo", controller.getUsersPromo);
index.get("/challenges", controller.challenges);
index.put("/updateScoreUser", controller.updateScoreUser);

index.get("/");
