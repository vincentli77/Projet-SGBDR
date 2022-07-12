import { Connect, Query } from "./database.service";
import { updateUserScore as updateUserScoreQuery } from "../crud/user";
import { StateMachineContext } from "../helpers/tests.sequencer";

export const updateUserScoreService = async (user: StateMachineContext["user"], score: number): Promise<number> => {
	try {
		const connection = await Connect();
		console.log("TRY");

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
