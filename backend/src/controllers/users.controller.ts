import { Request, Response } from "express";
import { getChallenges as getChallengesQuery } from "../crud/challenge";
import { getPromoName as getPromoNameQuery } from "../crud/promotion";

import { Connect, Query } from "../services/database.service";
import {
	getUsers as getUsersQuery,
	createUser as createUserQuery,
	getUsersByPromotionName as getUsersByPromotionNameQuery,
	updateUserScore as updateUserScoreQuery,
	createResult as createResultQuery,
	getUserByMail as getUserByMailQuery,
} from "../crud/user";
import { User, UserChallengeResult, Result } from "../interfaces/user.interface";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const users = await Query(connection, getUsersQuery);

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

export const getUserByMail = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const user = await Query(connection, getUserByMailQuery, [req.body.email]);

		if (!user) {
			res.status(404).send("No user found");
			return;
		}

		res.status(200).send({ user, message: "get  user info success" });
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
		const createUser = await Query(connection, createUserQuery, [user, req.body.promotion]);

		res.status(200).send({ createUser, message: "User has been created" });
		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const getUsersByPromotionName = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const getUsersByPromotionName = await Query(connection, getUsersByPromotionNameQuery, [req.body.promotion]);
		res.status(200).send({ getUsersByPromotionName, message: "get users by promotion name success" });
		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const getChallenges = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const getChallenges = await Query(connection, getChallengesQuery);

		res.status(200).send({ getChallenges, message: "get challenges success" });
		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const createResult = async (req: Request, res: Response): Promise<void> => {
	const user: Result = {
		email: req.body.email,
		challenge_name: req.body.challenge_name,
		promotion_name: req.body.promotion_name,
	};

	try {
		const connection = await Connect();
		const createResult = await Query(connection, createResultQuery, [
			user.email,
			user.challenge_name,
			user.promotion_name,
		]);

		res.status(200).send({ createResult, message: "create result success" });
		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};

export const getPromoName = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const promotion = await Query(connection, getPromoNameQuery);

		if (!promotion) {
			res.status(404).send("No promo found");
			return;
		}

		res.status(200).send({ promotion, message: "get all promo name success" });
		connection.end();
	} catch (error) {
		res.status(500).send({ error, message: "Connection failed" });
	}
};
