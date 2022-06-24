/* eslint-disable max-len */
import { log } from "console";
import { Request, Response } from "express";
import { queryUsers, queryCreateUser, queryGetUsersPromo, queryChallenges, queryUpdateScoreUser } from "../config/crud.config";
import { Connect } from "../services/database.service";
export const getUsers = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	try {
		db.query(queryUsers, function (err: any, result: any) {
			if (err) throw err;
			res.status(200).send({
				result,
			});
		});
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	const users = {
		email: req.body.email,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		role: req.body.role,
	};
	try {
		db.query(queryCreateUser, [users, req.body.promotion], function (err: any, result: any) {
			if (err) throw err;
			res.status(200).send({
				result,
			});
			// eslint-disable-next-line comma-dangle
		});
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};

export const getUsersPromo = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();

	try {
		db.query(queryUpdateScoreUser, function (err: any, result: any) {
			res.status(200).send({
				result,
			});
		});
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};

export const updateScoreUser = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	const user = {
		user_id: req.body.user_id,
		challenge_id: req.body.challenge_id,
		score: req.body.score,
	};
	console.log(user);
	try {
		db.query(queryUpdateScoreUser, [user.score, user.user_id, user.challenge_id], function (err: any, result: any) {
			res.status(200).send({
				result,
			});
		});
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};
export const challenges = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	try {
		db.query(queryChallenges, function (err: any, result: any) {
			res.status(200).send({
				result,
			});
		});
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};
