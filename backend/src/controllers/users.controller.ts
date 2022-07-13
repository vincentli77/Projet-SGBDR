import { Request, Response } from "express";
import { User, UserResult } from "../interfaces/user.interface";
import { Connect, Query } from "../services/database.service";
import {
	getUsers as getUsersQuery,
	createUser as createUserQuery,
	getUsersByPromotionName as getUsersByPromotionNameQuery,
	createResult as createResultQuery,
	getUserByMail as getUserByMailQuery,
	getUserResult as getResultQuery,
} from "../crud/user";

/**
 * It connects to the database, queries the database for all users, and sends the response to the
 * client
 * @param {Request} req - Request - This is the request object that contains the request data.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 * @returns An array of users
 */
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

/**
 * It takes a request and a response, and returns a promise that resolves to a void
 * @param {Request} req - Request - This is the request object that contains the data sent from the
 * client.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 * @returns The user object
 */
export const getUserByMail = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const user = await Query(connection, getUserByMailQuery, [req.query.email]);

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

/**
 * It creates a user in the database
 * @param {Request} req - Request - This is the request object that contains the data sent by the
 * client.
 * @param {Response} res - Response: This is the response object that will be sent back to the client.
 */
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

/**
 * It gets the result of a user for a specific challenge and promotion
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - the response object that will be sent back to the client
 * @returns The user's result for a specific challenge
 */
export const getUserResult = async (req: Request, res: Response): Promise<void> => {
	try {
		const connection = await Connect();
		const users = await Query(connection, getResultQuery, [
			req.body.email,
			req.body.challenge_name,
			req.body.promotion_name,
		]);

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

/**
 * It gets all the users from the database that have the same promotion name as the one passed in the
 * request body
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response: The response object that will be sent to the client.
 * @returns An array of users
 */
export const getUsersByPromotionName = async (req: Request, res: Response): Promise<void> => {
	console.log(req.query.promotion);
	
	
	try {
		const connection = await Connect();
		const usersByPromotionName: User[] = await Query(connection, getUsersByPromotionNameQuery, [
			req.query.promotion,
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

/**
 * It takes the request body, creates a user object, and then inserts that user object into the
 * database
 * @param {Request} req - Request - This is the request object that contains the data sent from the
 * client.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 */
export const createResult = async (req: Request, res: Response): Promise<void> => {

	const user: UserResult = {
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
