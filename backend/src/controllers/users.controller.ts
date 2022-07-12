/* eslint-disable max-len */
import { Request, Response } from "express";
import { getChallenges as getChallengesQuery } from "../crud/challenge";
import { Connect, Query } from "../services/database.service";
import {
	getUsers as getUsersQuery,
	createUser as createUserQuery,
	getUsersByPromotionName as getUsersByPromotionNameQuery,
	updateUserScore as updateUserScoreQuery,
	createResult as createResultQuery,
} from "../crud/user";
import { User, UserChallengeResult,Result } from "../interfaces/user.interface";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {
		const users = await Query(connection, getUsersQuery );

		if(!users) {
			res.status(404).send("No user found");
			return;
		}

		// connection.query(getUsersQuery, (error: MysqlError | null, result: User[]) => {
		// 	if (error) return res.status(500).send({ error,message:'Get users failed' });

			res.status(200).send({ users, message : "get all users success" });
			connection.end();
		// });
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	const user: Omit<User, "id" | "promoId" | "createdAt"> = {
		email: req.body.email,
		first_name: req.body.firstname,
		last_name: req.body.lastname,
		role: 'student',
	};

	try {
		
		const createUser = await Query(connection, createUserQuery, [user, req.body.promotion] );
		res.status(200).send({ createUser, message : "User has been created" });

	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const getUsersByPromotionName = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {		
		const getUsersByPromotionName = await Query(connection, getUsersByPromotionNameQuery, [req.body.promotion] );
		res.status(200).send({ getUsersByPromotionName,message :"get users by promotion name success" });

	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const updateUserScore = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	const userChallengeResult: Omit<UserChallengeResult, "id" | "promoId" | "createdAt"> = {
		userId: req.body.user_id,
		challengeId: req.body.challenge_id,
		score: req.body.score,
	};

	try {

	const updateUserScore = await Query(connection, updateUserScoreQuery, [userChallengeResult.score, userChallengeResult.userId, userChallengeResult.challengeId] );
	res.status(200).send({ updateUserScore,message :'score update success' });

	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};
export const challenges = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

	try {
		const getChallenges = await Query(connection, getChallengesQuery);

		res.status(200).send({ getChallenges,message:'get challenges success' });
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};

export const createResult = async (req: Request, res: Response): Promise<void> => {
	const connection = await Connect();

		const user: Result = {
		email: req.body.email,
		challenge_name: req.body.challenge_name,
		promotion_name: req.body.promotion_name,
	};

	
	try {
		const createResult = await Query(connection, createResultQuery,[user.email, user.challenge_name, user.promotion_name]);

		res.status(200).send({ createResult,message:'create result success' });
	} catch (error) {
		res.status(500).send({ error,message: "Connection failed" });
	}
};
