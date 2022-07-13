import React from "react";

interface Props {
	name: string;
	description: string;
	type: "blue";
}

export const CardQuestion = (props: Props): JSX.Element => {
	return (
		<div className={`CompactCard ${props.type}`}>
			<div className="detail">
				<span> {props.name}</span>
				<span> {props.description}</span>
			</div>
		</div>
	);
};
