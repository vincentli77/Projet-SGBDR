/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CardDescription } from "../../../components/main/CardDescription.component";
import { SideBar } from "../../../Components/sideBar/SideBar.component";
// import { Table } from "../../../Components/table/Table.component";
import { ButtonAdd } from "../../../components/buttons/ButtonAdd.component";
import "./Dashboard.scss";

export const Dashboard = (): JSX.Element => {
	const promoTest = {
		id: "1",
		userId: "12312312",
		challengeId: "31312",
		createdAt: "31/01",
		promoId: "21312312",
		promoName: "MT_2022",
		score: 0,
	};

	// const userTest = {
	// 	email: "test@est.com",
	// 	score: 0,
	// 	firstname: "li",
	// 	lastname: "li",
	// };

	return (
		<div className="App">
			<div className="container">
				<SideBar
					challenges={[
						{ id: "0", name: "Challenge 1" },
						{ id: "0", name: "Challenge 2" },
					]}
				/>

				<CardDescription cardType={"promo"} promoList={[promoTest]} />
				<ButtonAdd />
				{/* <Table users={[userTest]} /> */}

				{/* <CardDescription cardType={"question"} question={{ id: "1", name: "test", statement: "connectez vous" }} /> */}
			</div>
		</div>
	);
};
