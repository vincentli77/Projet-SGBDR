export const queryUsers = "SELECT * FROM Users";
export const queryChallenges = "SELECT * FROM Challenges";
export const queryCreateUser = `INSERT INTO Users 
			SET ?, promo_id  = (SELECT id 
				FROM Promotions 
				WHERE Promotions.name = ?)`;
export const queryGetUsersPromo = `SELECT * FROM Users 
             INNER JOIN Promotions on ? = Promotions.name`;
