import { Request, Response } from "express";
import { Challenge } from "../interfaces/challenge";
import { Connect, Query } from "../services/database.service";
import { getChallenges as getChallengesQuery } from "../crud/challenge";

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
