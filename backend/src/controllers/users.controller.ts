import { log } from "console";
import { Request, Response } from "express";
import { queryUsers, queryCreateUser, queryGetUsersPromo, queryChallenges } from "../config/crud.config";
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
		db.query(queryGetUsersPromo, req.body.promotion, function (err: any, result: any) {
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
