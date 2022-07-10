export const queryUsers = "SELECT * FROM Users";
export const queryCreateUser = `INSERT INTO Users 
			SET ?, promo_id  = (SELECT id 
				FROM Promotions 
				WHERE Promotions.name = ?)`;
export const queryGetUsersPromo = `SELECT * FROM Users 
             INNER JOIN Promotions on ? = Promotions.name`;
export const queryUpdateScoreUser = "UPDATE Results SET score=? WHERE user_id=? AND challenge_id=?";
