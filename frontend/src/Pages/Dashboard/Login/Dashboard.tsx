/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ButtonAdd } from "../../../Components/buttons/ButtonAdd.component";
import { CardDescription } from "../../../Components/main/CardDescription.component";
import { SideBar } from "../../../Components/SideBar/SideBar.component";
import { getPromotionName } from "../../../hook/getPromotionName";
import { getUserByPromotionName } from "../../../hook/getUserByPromotionName";
import { Table } from "../../../Components/table/Table.component";

import "./Dashboard.scss";

export const Dashboard = (): JSX.Element => {
	const [users, setUsers] = useState();
	const [promotions, setPromotions] = useState<any>([]);
	const [promo, setPromo] = useState();

	useEffect(() => {
		getPromotionName().then(function (result) {
			setPromotions(result.promotions);
		});
	}, []);

	useEffect(() => {
		getUserByPromotionName(promo).then(function (result) {
			setUsers(result.users);
		});
	}, [promo]);

	const getCurrentPromo = (data) => {
		setPromo({ promotion: data });
	};

	return (
		<div className="container">
			<div>
				<SideBar
					challenges={[
						{ id: "0", name: "Challenge 1" },
						{ id: "1", name: "Challenge 2" },
					]}
				/>{" "}
				<ButtonAdd />
			</div>

			<div>
				<CardDescription cardType={"promo"} promoList={promotions} getCurrentPromo={getCurrentPromo} />
				<div>
					<Table users={users} />
				</div>
			</div>
		</div>
	);
};
