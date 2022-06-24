import { log } from "console";
import { Request, Response } from "express";
import { Connect } from "../services/database.service";

export const findAllUsers = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	try {
		db.query("SELECT * FROM Users", function (err: any, result: any) {
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

export const createUsers = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	const users = {
		email: req.body.email,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		role: req.body.role,
	};
	try {
		db.query(
			`INSERT INTO Users 
			SET ?, promo_id  = (SELECT id 
				FROM Promotions 
				WHERE Promotions.name = ?)`,
			[users, req.body.promotion],
			function (err: any, result: any) {
				if (err) throw err;
				res.status(200).send({
					result,
				});
				// eslint-disable-next-line comma-dangle
			}
		);
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};

export const findAllUsersByPromo = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	try {
		db.query(
			`SELECT * FROM Users 
             INNER JOIN Promotions on ? = Promotions.name`,
			req.body.promotion,
			function (err: any, result: any) {
				if (err) throw err;
				res.status(200).send({
					result,
				});
			},
		);
	} catch (err) {
		res.status(500).send({
			err,
		});
	}
};
export const findAllChallenge = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	try {
		db.query("SELECT * FROM Challenges", function (err: any, result: any) {
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
