/**
 *
 */
export const getUsers = "SELECT * FROM Users";
export const getUsersByPromotionName = `SELECT * FROM Users  WHERE 
promo_id = (SELECT id FROM Promotions WHERE Promotions.name = ?)`;
export const getUserByMail = "SELECT * FROM Users WHERE email = ?";
export const getUserResult = `SELECT * FROM Results
 WHERE user_id = (SELECT id FROM Users WHERE Users.email = ?)
  AND challenge_id =(SELECT id FROM Challenges WHERE Challenges.name = ?)
  AND promo_id  = (SELECT id FROM Promotions WHERE Promotions.name = ?);`;


/**
 *
 */
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
export const updateUserScore = `UPDATE Results SET score=? WHERE
                user_id = (SELECT id 
                FROM Users 
                WHERE Users.email = ?)
                AND
                challenge_id  = (SELECT id 
                FROM Challenges 
                WHERE Challenges.name = ?)
                AND
                promo_id  = (SELECT id 
                FROM Promotions 
                WHERE Promotions.name = ?)`;
