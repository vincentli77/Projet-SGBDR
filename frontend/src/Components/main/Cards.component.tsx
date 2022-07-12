import React from "react";
import { Promo } from "../../interfaces/result.interface";
import { Card } from "./Card.component";
interface Props {
	promos: Promo[];
	getCurrentPromo?: any;
}

export const Cards = (props: Props): JSX.Element => {
	if (!props.promos) return <div>Aucune promotions disponible</div>;

	return (
		<div className="Cards">
			<div>{props.promos.length > 0 && props.promos[0].map((promo, i) => <Card getCurrentPromo={props.getCurrentPromo} key={i} promoName={promo.name} type={"blue"} />)}</div>
		</div>
	);
};

//il faudra rajouter des couleurs pour les cards dans la bdd du coup apres je pense
