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
		<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
			<TableCell align="left">{props.studentName ?? "Non renseigné"}</TableCell>
			<TableCell align="left">{props.email ?? "Non renseigné"}</TableCell>
			<TableCell align="left" className="score">
				{props.score ?? "Non renseigné"}
			</TableCell>
		</TableRow>
	);
};
