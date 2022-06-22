import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsPeople } from "react-icons/bs";

interface Props {
	promoName: string;
	colorBackground: string;
	colorBoxShadow: string;
	averageScore: number;
	createdAt: string;
}

export const Card = (props: Props): JSX.Element => {
	return (
		<motion.div
			className="CompactCard"
			style={{
				background: props.colorBackground,
				boxShadow: props.colorBoxShadow,
			}}
		>
			<div className="radialBar">
				<CircularProgressbar value={props.averageScore} text={`${props.averageScore}%`} />
				<span>{props.promoName}</span>
			</div>
			<div className="detail">
				<BsPeople />
				<span>score moyen: {props.averageScore}</span>
				<span>créer le: {props.createdAt}</span>
			</div>
		</motion.div>
	);
};
