import { Request, Response } from "express";
import { Promotion } from "../interfaces/promotion";
import { Connect, Query } from "../services/database.service";
import { getPromotionsName as getPromoNameQuery } from "../crud/promotion";

/**
 * It gets all the promotions from the database and sends them to the client
 * @param {Request} req - Request - This is the request object that contains the request data.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 * @returns An array of promotions
 */
export const getPromotions = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const promotions: Promotion[] = await Query(connection, getPromoNameQuery);

		if (!promotions.length) {
			res.status(200).send({ promotions, message: "No promotion found" });
			return;
		}

		res.status(200).send({ promotions, message: "success" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};
