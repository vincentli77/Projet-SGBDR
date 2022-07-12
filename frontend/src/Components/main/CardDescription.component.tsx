import React from "react";
import { Promo } from "../../interfaces/result.interface";
import { Question } from "../../interfaces/question.interface";
import { CardQuestion } from "./CardQuestion.component";
import "./Card.scss";
import { Cards } from "./Cards.component";
import { ButtonCheck } from "../buttons/ButtonCheck.component";

// const userTest = {
// 	email: "test@est.com",
// 	score: 0,
// 	firstname: "li",
// 	lastname: "li",
// };

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
					<Cards promos={props.promoList} />
				</div>
			) : (
				<div>
					<CardQuestion name={props.question.name} description={props.question.statement} type={"blue"} />
				</div>
			)}

			{/* <Table users={[userTest]} /> */}
			<ButtonCheck />
		</div>
	);
};
