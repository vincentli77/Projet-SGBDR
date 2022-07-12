/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { createResult } from "../../../hook/createResult";
import { createUser } from "../../../hook/createUser";
import "./introduction.scss";

export const Subscribe = (): JSX.Element => {
	const user = JSON.parse(sessionStorage.getItem("user"));
	const email = user[0].email;
	const [firstname, setFirstName] = useState(null);
	const [lastname, setLastname] = useState(null);
	const [promotion, setPromotion] = useState("MT4_2022");

	const createUserData = {
		email: email,
		firstname: firstname,
		lastname: lastname,
		promotion: promotion,
	};

	const createUserResult = {
		email: email,
		challenge_name: "Unix",
		promotion_name: promotion,
	};

	function Handdlefirstname(e) {
		setFirstName(e.target.value);
	}
	function Handdlelastname(e) {
		setLastname(e.target.value);
	}

	return (
		<div className="App">
			<div className="AppGlass">
				<div>
					<div className="input-test-one">
						<input placeholder="firstname" onChange={Handdlefirstname}></input>
						<input placeholder="lastname" onChange={Handdlelastname}></input>
						<select value={promotion} name="promo" id="promo-select" onChange={(e) => setPromotion(e.target.value)}>
							<option value="MT4_2022">MT4_2022</option>
							<option value="MT4_2023">MT4_2023</option>
							<option value="MT4_2024">MT4_2024</option>
						</select>
					</div>
				</div>

				<div className="buttons">
					<div id="btn-wrapper">
						<button
							className="check-btn"
							name="check-btn"
							onClick={() => {
								createUser(createUserData);
								createResult(createUserResult);
							}}
						>
							Tester la connexion
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
