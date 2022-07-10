import { evaluationFlow } from "./ssh.controller";
import { mailProvider, refreshToken, accessToken } from "../controllers/auth.controller";
import {
	getUsers,
	createUser,
	getUsersByPromotionName,
	challenges,
	updateUserScore,
	createResult,
	getPromoName,
	getUserByMail,

} from "./users.controller";

export {
	mailProvider,
	refreshToken,
	accessToken,
	evaluationFlow,
	getUsers,
	createUser,
	getUsersByPromotionName as getUsersPromo,
	updateUserScore as updateScoreUser,
	challenges,
	createResult,
	getPromoName,
	getUserByMail,
};
