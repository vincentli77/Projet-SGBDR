import React from "react";
import "./button.scss";
import { BsClipboardCheck } from "react-icons/bs";

export const ButtonAddChallenge = (): JSX.Element => {
	return (
		<div className="buttons">
			<div id="btn-wrapper">
				<button className="add-promo-btn" name="add-promo-btn">
					Add Challenge <BsClipboardCheck />
				</button>
			</div>
		</div>
	);
};
