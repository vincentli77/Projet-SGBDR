export interface Result {
	id: string;
	userId: string;
	challengeId: string;
	score: number;
	createdAt: string;
	promoId: string;
}

export interface AverageScore extends Result {
	averageScore: number;
	promoName: string;
	colorBackground: string;
	colorBoxShadow: string;
}
