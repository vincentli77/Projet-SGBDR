import { Request, Response } from "express";
import { User, Result } from "../interfaces/user.interface";
import { Challenge } from "../interfaces/challenge";
import { Promotion } from "../interfaces/promotion";
import { Connect, Query } from "../services/database.service";
import { getChallenges as getChallengesQuery } from "../crud/challenge";
import { getPromotionsName as getPromoNameQuery } from "../crud/promotion";
import {
	getUsers as getUsersQuery,
	createUser as createUserQuery,
	getUsersByPromotionName as getUsersByPromotionNameQuery,
	createResult as createResultQuery,
	getUserByMail as getUserByMailQuery,
	getUserResult as getResultQuery,
} from "../crud/user";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const users: User[] = await Query(connection, getUsersQuery);

		if (!users.length) {
			res.status(200).send({ users, message: "No user found" });
			return;
		}

		res.status(200).send({ users, message: "success" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const getUserByMail = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const user = await Query(connection, getUserByMailQuery, [req.body.email]);

		if (!user.length) {
			res.status(200).send("No user found");
			return;
		}

		res.status(200).send({ user, message: "success" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
	const user: Omit<User, "id" | "promoId" | "createdAt"> = {
		email: req.body.email,
		first_name: req.body.firstname,
		last_name: req.body.lastname,
		role: "student",
	};

	try {
		const connection = await Connect();
		await Query(connection, createUserQuery, [user, req.body.promotion]);

		res.status(200).send({ message: "User has been created" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const getUserResult = async (req: Request, res: Response): Promise<void> => {
	try {
		
		const connection = await Connect();
		const users = await Query(connection, getResultQuery, [req.body.email,req.body.challenge_name,req.body.promotion_name]);

		if (!users) {
			res.status(404).send("No user found");
			return;
		}

		res.status(200).send({ users, message: "get all users success" });
		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const getUsersByPromotionName = async (req: Request, res: Response): Promise<void> => {
	
	try {
		const connection = await Connect();
		const usersByPromotionName: User[] = await Query(connection, getUsersByPromotionNameQuery, [
			req.body.promotion,
		]);

		if (!usersByPromotionName.length) {
			res.status(200).send({ users: usersByPromotionName, message: "No user found" });
			return;
		}

		res.status(200).send({ users: usersByPromotionName, message: "success" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

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

export const createResult = async (req: Request, res: Response): Promise<void> => {
	console.log(req.body);
	
	const user: Result = {
		email: req.body.email,
		challenge_name: req.body.challenge_name,
		promotion_name: req.body.promotion_name,
	};

	try {
		const connection = await Connect();
		await Query(connection, createResultQuery, [user.email, user.challenge_name, user.promotion_name]);

		res.status(200).send({ message: "success" });

		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

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
