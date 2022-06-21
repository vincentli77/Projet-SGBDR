import { TableCell, TableHead } from "@mui/material";
import React from "react";

export const Header = (): JSX.Element => {
	return (
		<TableHead>
			<TableCell>Students</TableCell>
			<TableCell align="right">Email</TableCell>
			<TableCell align="right">Score</TableCell>
		</TableHead>
	);
};
