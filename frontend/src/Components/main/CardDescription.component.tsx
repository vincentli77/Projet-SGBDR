import React from "react";
import { Cards } from "./Cards.component";
import { Promo } from "../interfaces/result.interface";
import { Question } from "../interfaces/question.interface";
import { CardQuestion } from "./CardQuestion.component";
import { ButtonCheck } from "../buttons/ButtonCheck.component";

interface Props {
	cardType: "promo" | "question";
	promoList?: Promo[];
	question?: Question;
}

export const CardDescription = (props: Props): JSX.Element => {
	return (
		<div className="MainDash">
			{props.cardType === "promo" ? (
				<div>
					<Cards promos={props.promoList[0]} /> |
				</div>
			) : (
				<div>
					<CardQuestion name={props.question.name} description={props.question.description} type={"blue"} />
				</div>
			)}

			{/* <Table users={[userTest]} /> */}
			<ButtonCheck />
		</div>
	);
};
