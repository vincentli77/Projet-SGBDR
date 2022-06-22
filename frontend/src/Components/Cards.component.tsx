import React from "react";
import { Card } from "./Card.component";
import { AverageScore } from "../interfaces/result.interface";

interface Props {
	infos: AverageScore[];
}

export const Cards = (props: Props): JSX.Element => {
	return (
		<div className="Cards">
			<div className="parentContainer">{props.infos.length > 0 && props.infos.map((info) => <Card key={info.promoId} promoName={info.promoName} createdAt={info.createdAt} colorBackground={info.colorBackground} colorBoxShadow={info.colorBoxShadow} averageScore={info.averageScore} />)}</div>
		</div>
	);
};

//il faudra rajouter des couleurs pour les cards dans la bdd du coup apres je pense
