import React from "react";
import { motion } from "framer-motion";
import { BsPeople } from "react-icons/bs";
import "./Card.scss";

interface Props {
	promoName: string;
	averageScore: number;
	createdAt: string;
	type: "blue" | "purple" | "pink" | "yellow";
}

export const Card = (props: Props): JSX.Element => {
	return (
		<motion.div className={`CompactCard ${props.type}`}>
			<div className="radialBar">
				<span>{props.promoName}</span>
			</div>
			<div className="detail">
				<BsPeople />
			</div>
		</motion.div>
	);
};
