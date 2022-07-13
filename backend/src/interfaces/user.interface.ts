export interface Email {
	email: string;
}

export interface User {
	id: string;
	promoId: string;
	email: string;
	first_name: string;
	last_name: string;
	role: "admin" | "student";
	createdAt: string;
}

export interface UserChallengeResult {
	id: string;
	score: number;
	userId: string;
	challengeId: string;
	promoId: string;
	createdAt: string;
}

export interface UserResult {
	email: string;
	challenge_name: string;
	promotion_name: string;
}
