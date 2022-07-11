/* eslint-disable max-len */
import { Request, Response } from "express";
import { getChallenges } from "../crud/challenge";
import { Connect } from "../services/database.service";
import {
	getUsers as getUsersQuery,
	createUser as createUserQuery,
	getUsersByPromotionName as getUsersByPromotionNameQuery,
	updateUserScore as updateUserScoreQuery,
} from "../crud/user";
import { MysqlError } from "mysql";
import { User, UserChallengeResult } from "../interfaces/user.interface";
import { Challenge } from "../interfaces/challenge";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {
		connection.query(getUsersQuery, (error: MysqlError | null, result: User[]) => {
			if (error) return res.status(500).send({ error,message:'Get users failed' });

			res.status(200).send({ result, message : "get all users success" });
		});
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	const user: Omit<User, "id" | "promoId" | "createdAt"> = {
		email: req.body.email,
		first_name: req.body.firstname,
		last_name: req.body.lastname,
		role: req.body.role,
	};

	try {
		connection.query(
			createUserQuery,
			[user, req.body.promotion],
			function (error: MysqlError | null, result: User) {
				if (error) return res.status(500).send({ error ,  message: "Create user failed" });

				res.status(200).send({ result, message : "User has been created" });
			},
		);
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const getUsersByPromotionName = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {
		connection.query(getUsersByPromotionNameQuery,[req.body.promotion], function (error: MysqlError | null, result: User[]) {
			if (error) return res.status(500).send(error);

			res.status(200).send({ result,message :"get users by promotion name succsss" });
		});
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const updateUserScore = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	const userChallengeResult: Omit<UserChallengeResult, "id" | "promoId" | "createdAt"> = {
		userId: req.body.user_id,
		challengeId: req.body.challenge_id,
		score: req.body.score,
	};

	try {
		connection.query(
			updateUserScoreQuery,
			[userChallengeResult.score, userChallengeResult.userId, userChallengeResult.challengeId],
			function (error: MysqlError | null, result: UserChallengeResult) {
				if (error) return res.status(500).send({ error,message:'score update failed' });

				res.status(200).send({ result,message :'score update success' });
			},
		);
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};
export const challenges = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {
		connection.query(getChallenges, function (error: MysqlError | null, result: Challenge[]) {
			if (error) return res.status(500).send({ error,message:'get challenges failed' }) ;
			res.status(200).send({ result,message:'get challenges success' });
		});
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};
