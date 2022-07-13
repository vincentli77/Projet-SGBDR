import { Connect, Query } from "./database.service";
import { updateUserScore as updateUserScoreQuery } from "../crud/user";
import { StateMachineContext } from "../helpers/tests.sequencer";

/**
 * It updates the user's score in the database
 * @param user - StateMachineContext["userResult"]
 * @param {number} score - number - The score to update the user's score to.
 * @returns The updated score
 */
export const updateUserScoreService = async (
	user: StateMachineContext["userResult"],
	score: number,
): Promise<number> => {
	try {
		const connection = await Connect();
		
		console.log(score, user);
				
		const updatedScore: number = await Query(connection, updateUserScoreQuery, [
			score,
			user.email,
			user.challenge_name,
			user.promotion_name,
		]);

		connection.end();

		return updatedScore;
	} catch (error) {
		console.log(error);
	}
};
