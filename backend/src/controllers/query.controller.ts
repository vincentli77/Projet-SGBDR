import { Request, Response } from "express";
import { Connect } from "../services/database.service";

export const findAllUsers = async (req: Request, res: Response): Promise<void> => {
	const db = await Connect();
	try {
		db.query("SELECT * FROM users", function (err: any, result: any) {
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
	const data = {
		email: "ee@€zaeaz",
		first_name: "li",
		last_name: "vincent",
		promotion: "P2022",
		role: "student",
	};
	try {
		db.query(
			`INSERT INTO backendproject.users (email, first_name, last_name,role,promo_id) 
             VALUES ('${data.email}', '${data.first_name}', '${data.last_name}','${data.role}',
             (SELECT id FROM promotions WHERE promotions.name = '${data.promotion}'))`,
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
	const data = {
		promotion: "P2021",
	};
	try {
		db.query(
			`SELECT * FROM users 
             INNER JOIN promotions on '${data.promotion}' = promotions.name`,
			function (err: any, result: any) {
				if (err) throw err;
				res.status(200).send({
					result,
				});
			}
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
		db.query("SELECT * FROM challenges", function (err: any, result: any) {
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
