/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { CardDescription } from "../../../Components/card/CardDescription.component";
import { SideBar } from "../../../Components/SideBar/SideBar.component";
import { getPromotionName } from "../../../hook/getPromotionName";
import { getUserByPromotionName } from "../../../hook/getUserByPromotionName";

import { ButtonAdd } from "../../../components/buttons/ButtonAdd.component";
import "./Dashboard.scss";

export const Dashboard = (): JSX.Element => {
	const [users, setUsers] = useState();
	const [promotions, setPromotions] = useState<any>([]);

	const data = { promotion: "MT4_2022" };

	useEffect(() => {
		getUserByPromotionName(data).then(function (result) {
			setUsers(result.getUsersByPromotionName);
		});
		getPromotionName().then(function (result) {
			setPromotions(result.promotion);
		});
	}, []);

	return (
		<div className="container">
			<SideBar
				challenges={[
					{ id: "0", name: "Challenge 1" },
					{ id: "1", name: "Challenge 2" },
				]}
			/>

			<CardDescription cardType={"promo"} promoList={[promotions]} />
			<ButtonAdd />
		</div>
	);
};
