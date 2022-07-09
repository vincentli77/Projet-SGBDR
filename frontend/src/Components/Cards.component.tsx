import React from "react";
import { Card } from "./Card.component";
import { Promo } from "../interfaces/result.interface";

interface Props {
	promos: Promo[];
}

export const Cards = (props: Props): JSX.Element => {
	return (
		<div className="Cards">
			<div className="parentContainer">{props.promos.length > 0 && props.promos.map((promo) => <Card key={promo.promoId} promoName={promo.promoName} createdAt={promo.createdAt} type={"blue"} averageScore={promo.averageScore} />)}</div>
		</div>
	);
};

//il faudra rajouter des couleurs pour les cards dans la bdd du coup apres je pense
