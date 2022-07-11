// TODO: [not urgent, not urgent]: find a better name
export interface MailProvider {
	email: string;
}

export interface User {
	id: string;
	promoId: string;
	email: string;
	firstname: string;
	lastname: string;
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
