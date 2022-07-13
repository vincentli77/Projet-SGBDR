import { evaluation } from "./evaluation.controller";
import { mailProvider, refreshToken, accessToken } from "../controllers/auth.controller";
import {
	getUsers,
	createUser,
	getUsersByPromotionName,
	getChallenges,
	createResult,
	getUserByMail,
	getUserResult,
} from "./users.controller";
import { getPromotions } from "./promotion.controller";

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
