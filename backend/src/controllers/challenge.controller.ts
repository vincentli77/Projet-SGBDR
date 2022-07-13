import { Request, Response } from "express";
import { Challenge } from "../interfaces/challenge";
import { Connect, Query } from "../services/database.service";
import { getChallenges as getChallengesQuery } from "../crud/challenge";

/**
 * It connects to the database, queries the database for all challenges, and sends the response to the
 * client
 * @param {Request} req - Request - This is the request object that contains the request data.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 * @returns An array of challenges
 */
export const getChallenges = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const challenges: Challenge[] = await Query(connection, getChallengesQuery);

		if (!challenges.length) {
			res.status(200).send({ challenges, message: "No chanllenge found" });
			return;
		}

		res.status(200).send({ challenges, message: "success" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};
