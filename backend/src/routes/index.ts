import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

//evaluation tests
index.post("/evaluation", controller.evaluation);

//auth
index.post("/mailProvider", controller.mailProvider);
index.post("/refreshToken", controller.refreshToken);
index.get("/accessToken", controller.accessToken);

//crud users
index.get("/users", controller.getUsers);
index.post("/user", controller.getUserByMail);
index.post("/user/create", controller.createUser);
index.post("/result/create", controller.createResult);
index.post("/result", controller.getUserResult);
index.get("/promoName", controller.getPromoName);
index.post("/usersPromo", controller.getUsersByPromotionName);
index.get("/challenges", controller.getChallenges);

index.get("/");
