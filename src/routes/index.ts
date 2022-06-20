import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.post("/login", controller.mailAuth);
index.get("/connected", controller.connected);
