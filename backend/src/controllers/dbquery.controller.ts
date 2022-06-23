import { connectionDB } from "../services/dbconnect.service";
import { Request, Response } from "express";

export const findAllUsers = async (req: Request, res: Response): Promise<void> => {
	const db = await connectionDB();
	try {
		db.query("SELECT * FROM book", function (err: any, result: any) {
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
