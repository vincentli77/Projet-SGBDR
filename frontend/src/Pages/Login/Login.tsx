/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { loginUser } from "../../hook/useLogin";

export const Login = (): JSX.Element => {
	const [email, setEmail] = useState();

	const onSubmit = async (e) => {
		e.preventDefault();
		setEmail(e.target[0].value);
		loginUser({ email: email });
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>
					<input type="email" onChange={(e) => setEmail} />
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};
