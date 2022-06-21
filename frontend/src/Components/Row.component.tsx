import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface Props {
	studentName: string;
	email: string;
	score: number;
}

export const Row = (props: Props): JSX.Element => {
	return (
		<TableRow>
			<TableCell>{props.studentName ?? "Non renseigné"}</TableCell>
			<TableCell align="right">{props.email ?? "Non renseigné"}</TableCell>
			<TableCell align="right">{props.score ?? "Non renseigné"}</TableCell>
		</TableRow>
	);
};
