import { evaluation } from "./evaluation.controller";
import { mailProvider, refreshToken, accessToken } from "../controllers/auth.controller";
import {
	getUsers,
	createUser,
	getUsersByPromotionName,
	getChallenges,
	createResult,
	getPromotions,
	getUserByMail,
	getUserResult,
} from "./users.controller";

export {
	mailProvider,
	refreshToken,
	accessToken,
	evaluation,
	getUsers,
	createUser,
	getUsersByPromotionName,
	getChallenges,
	createResult,
	getPromotions,
	getUserByMail,
	getUserResult,
};
