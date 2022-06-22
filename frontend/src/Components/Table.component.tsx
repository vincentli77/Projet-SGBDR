import React from "react";
import MuiTable from "@mui/material/Table";
import { Header } from "./Header.component";
import { Row } from "./Row.component";
import TableContainer from "@mui/material/TableContainer";
import { Paper, TableBody, TableHead } from "@mui/material";
import { UserScore } from "../interfaces/user.interface";

interface Props {
	users: UserScore[];
}

export const Table = (props: Props): JSX.Element => {
	return (
		<div className="Table">
			<h3> Recent Scores </h3>
			<TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
				<MuiTable sx={{ minwidth: 650 }} aria-table="simple table">
					<TableHead>
						<Header />
					</TableHead>

					<TableBody>{props.users.length > 0 && props.users.map((user) => <Row key={user.id} email={user.email} studentName={`${user.firstname} ${user.lastname}`} score={user.score} />)}</TableBody>
				</MuiTable>
			</TableContainer>
		</div>
	);
};
