import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

//evaluation tests
index.post("/evaluation", controller.evaluation);

//auth
index.post("/mailProvider", controller.mailProvider);
index.post("/refreshToken", controller.refreshToken);
index.get("/accessToken", controller.accessToken);
index.post("/user/create", controller.createUser);
index.post("/result/create", controller.createResult);
//crud users

index.get("/result", controller.getUserResult);
index.get("/users", controller.getUsers);
index.get("/user", controller.getUserByMail);
index.get("/promotions", controller.getPromotions);
index.get("/usersPromo", controller.getUsersByPromotionName);
index.get("/challenges", controller.getChallenges);

index.get("/");
