/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { loginUser } from "../../hook/useLogin";
import "./Login.scss";

export const Login = (): JSX.Element => {
	const [email, setEmail] = useState();

	const onSubmit = async (e) => {
		e.preventDefault();
		await loginUser({ email: email });
	};

	function handleChange(e) {
		setEmail(e.target.value);
	}

	return (
		<div className="container">
			<div className="top"></div>
			<div className="bottom"></div>
			<div className="center">
				<div> Login </div>
				<form onSubmit={onSubmit}>
					<div className="user-box">
						<label>
							<input placeholder="email" type="email" onChange={handleChange} />
						</label>
					</div>
					<button className="button-submit" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
