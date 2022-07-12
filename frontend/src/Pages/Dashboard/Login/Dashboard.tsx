/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CardDescription } from "../../../Components/card/CardDescription.component";
import { SideBar } from "../../../Components/SideBar/SideBar.component";
import { Table } from "../../../Components/Table.component";
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

	const userTest = {
		email: "test@est.com",
		score: 0,
		firstname: "li",
		lastname: "li",
	};

	return (
		<div className="container">
			<SideBar
				challenges={[
					{ id: "0", name: "Challenge 1" },
					{ id: "0", name: "Challenge 2" },
				]}
			/>

			<div>
				<div className="Cards">
					<div className="parrentContainer">
						<CardDescription cardType={"promo"} promoList={[promoTest]} />
					</div>
					<div className="parrentContainer">
						<CardDescription cardType={"promo"} promoList={[promoTest]} />
					</div>
					<div className="parrentContainer">
						<CardDescription cardType={"promo"} promoList={[promoTest]} />
					</div>
					<div className="parrentContainer">
						<CardDescription cardType={"promo"} promoList={[promoTest]} />
					</div>
				</div>
				<div>
					<Table users={[userTest]} />
				</div>
			</div>

			{/* <CardDescription cardType={"question"} question={{ id: "1", name: "test", statement: "connectez vous" }} /> */}
		</div>
	);
};
