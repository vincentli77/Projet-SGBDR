import React from "react";
import { Promo } from "../../interfaces/result.interface";
import { Card } from "../card/Card.component";
interface Props {
	promos: Promo[];
}

export const Cards = (props: Props): JSX.Element => {
	if (!props.promos) return <div>Aucune promotions disponible</div>;
	return (
		<div className="Cards">
			<div className="parentContainer">{props.promos.length > 0 && props.promos.map((promo) => <Card key={promo.promoId} promoName={promo.promoName} createdAt={promo.createdAt} type={"blue"} />)}</div>
		</div>
	);
};

//il faudra rajouter des couleurs pour les cards dans la bdd du coup apres je pense
