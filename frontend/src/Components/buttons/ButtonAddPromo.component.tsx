import React from "react";
import "./button.scss";
import { GrAddCircle } from "react-icons/gr";

export const ButtonAddPromo = (): JSX.Element => {
	return (
		<div className="buttons">
			<div id="btn-wrapper">
				<button className="add-promo-btn" name="add-promo-btn">
					ADD PROMO <GrAddCircle />
				</button>
			</div>
		</div>
	);
};
