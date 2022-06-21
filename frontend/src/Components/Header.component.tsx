import { TableCell, TableHead } from "@mui/material";
import React from "react";

interface Props {
	studentName: string;
	email: string;
	score: string;
}

export const Header = (props: Props): JSX.Element => {
	return (
		<TableHead>
			<TableCell>{props.studentName}</TableCell>
			<TableCell align="right">{props.email}</TableCell>
			<TableCell align="right">{props.score}</TableCell>
		</TableHead>
	);
};
