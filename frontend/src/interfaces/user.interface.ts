enum Role {
	ADMIN = "admin",
	STUDENT = "student",
}

export interface User {
	id: string;
	promoId: string;
	email: string;
	first_name: string;
	last_name: string;
	role: Role;
	createdAt: string;
}

export interface UserScore extends User {
	score: number;
}
