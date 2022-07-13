/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { createResult } from "../../../hook/createResult";
import { createUser } from "../../../hook/createUser";
import "./introduction.scss";

interface Props {
	subs: any;
}
export const Subscribe = (props: Props): JSX.Element => {
	const email = sessionStorage.getItem("email");
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
								createUser(createUserData).then(function (result) {
									console.log(result);
									createResult(createUserResult).then(function (result) {
										sessionStorage.setItem("subsInfo", JSON.stringify(createUserResult));
										props.subs();
									});
								});
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
