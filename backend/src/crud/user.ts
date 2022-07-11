/**
 *
 */
export const getUsers = "SELECT * FROM Users";
export const getUsersByPromotionName = `SELECT * FROM Users 
             INNER JOIN Promotions on ? = Promotions.name`;

/**
 *
 */
export const createUser = `INSERT INTO Users 
			SET ?, promo_id  = (SELECT id 
				FROM Promotions 
				WHERE Promotions.name = ?)`;

/**
 *
 */
export const updateUserScore = "UPDATE Results SET score=? WHERE user_id=? AND challenge_id=?";
