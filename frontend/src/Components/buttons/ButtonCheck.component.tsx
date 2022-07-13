import React from "react";
import "./button.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const ButtonCheck = (): JSX.Element => {
	return (
		<div className="buttons">
			<div id="btn-wrapper">
				<button className="check-btn" name="check-btn">
					SUBMIT <AiOutlineCheckCircle />
				</button>
			</div>
		</div>
	);
};
