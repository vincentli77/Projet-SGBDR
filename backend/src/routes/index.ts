import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.post("/evaluationFlow", controller.evaluationFlow);

//auth
index.post("/mailProvider", controller.mailProvider);
index.post("/refreshToken", controller.refreshToken);
index.get("/accessToken", controller.accessToken);
//crud users
index.get("/users", controller.getUsers);
index.post("/user", controller.getUserByMail);

index.post("/user/create", controller.createUser);
index.post("/result", controller.createResult);
index.get("/promoName", controller.getPromoName);
index.get("/usersPromo", controller.getUsersByPromotionName);
index.get("/challenges", controller.getChallenges);
index.put("/updateScoreUser", controller.updateUserScore);

index.get("/");
