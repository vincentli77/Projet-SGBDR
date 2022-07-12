/**
 *
 */
export const getUsers = "SELECT * FROM Users";
export const getUsersByPromotionName = `SELECT * FROM Users  WHERE 
promo_id = (SELECT id FROM Promotions WHERE Promotions.name = ?)`;


 
export const createUser = `INSERT INTO Users 
			SET ?, promo_id  = (SELECT id 
				FROM Promotions 
				WHERE Promotions.name = ?)`;
export const createResult = `INSERT INTO Results 
			SET user_id  = (SELECT id 
				FROM Users 
				WHERE Users.email = ?),
				challenge_id  = (SELECT id 
				FROM Challenges 
				WHERE Challenges.name = ?),
				promo_id  = (SELECT id 
				FROM Promotions 
				WHERE Promotions.name = ?),
				score = 0`;

/**
 *
 */
export const updateUserScore = "UPDATE Results SET score=? WHERE user_id=? AND challenge_id=?";



