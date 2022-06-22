enum Role {
	ADMIN = "admin",
	STUDENT = "student",
}

export interface User {
	id: string;
	promoId: string;
	email: string;
	firstname: string;
	lastname: string;
	role: Role;
	createdAt: string;
}

export interface UserScore extends User {
	score: number;
}
