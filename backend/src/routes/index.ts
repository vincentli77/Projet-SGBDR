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
index.post("/result", controller.createResult);

index.post("/usersPromo", controller.getUsersPromo);
index.get("/challenges", controller.challenges);
index.get("/promoName", controller.getPromoName);
index.put("/updateScoreUser", controller.updateScoreUser);

index.get("/");
