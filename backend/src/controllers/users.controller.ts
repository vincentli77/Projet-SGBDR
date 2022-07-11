/* eslint-disable max-len */
import { Request, Response } from "express";
import { getChallenges } from "../crud/challenge";
import {
	getUsers as getUsersQuery,
	createUser as createUserQuery,
	getUsersByPromotionName as getUsersByPromotionNameQuery,
	updateUserScore as updateUserScoreQuery,
} from "../crud/user";

import { Connect } from "../services/database.service";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();
	try {
		connection.query(getUsersQuery, function (err: any, result: any) {
			if (err) throw err;
			res.status(200).send({ result });
		});
	} catch (err) {
		res.status(500).send({ err });
	}
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();
	const users = {
		email: req.body.email,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		role: req.body.role,
	};

	try {
		connection.query(createUserQuery, [users, req.body.promotion], function (err: any, result: any) {
			if (err) throw err;
			res.status(200).send({ result });
		});
	} catch (err) {
		res.status(500).send({ err });
	}
};

export const getUsersPromo = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {
		connection.query(updateUserScoreQuery, function (err: any, result: any) {
			res.status(200).send({ result });
		});
	} catch (err) {
		res.status(500).send({ err });
	}
};

export const updateScoreUser = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();
	const user = {
		user_id: req.body.user_id,
		challenge_id: req.body.challenge_id,
		score: req.body.score,
	};

	try {
		connection.query(
			updateUserScoreQuery,
			[user.score, user.user_id, user.challenge_id],
			function (err: any, result: any) {
				res.status(200).send({ result });
			},
		);
	} catch (err) {
		res.status(500).send({ err });
	}
};
export const challenges = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();
	try {
		connection.query(getChallenges, function (err: any, result: any) {
			res.status(200).send({ result });
		});
	} catch (err) {
		res.status(500).send({ err });
	}
};
