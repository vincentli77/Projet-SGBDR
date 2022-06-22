import { TableCell, TableRow } from "@mui/material";
import React from "react";

export const Header = (): JSX.Element => {
	return (
		<TableRow>
			<TableCell align="left" className="pr-header">
				Students
			</TableCell>
			<TableCell align="left" className="pr-header">
				Email
			</TableCell>
			<TableCell align="left" className="pr-header">
				Score
			</TableCell>
		</TableRow>
	);
};
