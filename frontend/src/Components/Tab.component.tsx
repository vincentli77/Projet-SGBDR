import React from "react";
import Table from "@mui/material/Table";
import { Header } from "./Header.component";
import { Row } from "./Row.component";
import TableContainer from "@mui/material/TableContainer";
import { Paper, TableBody, TableHead } from "@mui/material";

interface Props {
	studentName: string;
	email: string;
	score: number;
}

export const Tab = (props: Props): JSX.Element => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minwidth: 650 }} aria-table="simple table">
				<TableHead>
					<Header studentName={props.studentName} email={props.email} score={props.score}></Header>
				</TableHead>

				<TableBody>
					<Row studentName={props.studentName ?? "non renseigné"} email={props.email ?? "non renseigné"} score={props.score ?? "non renseigné"}></Row>
				</TableBody>
			</Table>
		</TableContainer>
	);
};
