import { Router } from "express";
import * as controller from "../controllers/index";
import * as auth from "../controllers/auth.controller";

export const index = Router();

index.get("/", controller.index);
index.post("/login", auth.magicLink);
index.get("/connected", auth.connected);
