import React, { useState } from "react";
import "./App.scss";
import { Login } from "./Pages/login/Login";
import { checkToken } from "./hook/useCheckToken";
import { Dashboard } from "./Pages/Dashboard/Login/Dashboard";
import { getUserInfo } from "./hook/getUserInfo";

function App() {
	const check_token = checkToken();

	const email = sessionStorage.getItem("email");
	if (email) {
		getUserInfo({ email }).then(function (result) {
			sessionStorage.setItem("user", JSON.stringify(result.user));
		});
	}
	const user = JSON.parse(sessionStorage.getItem("user"));

	if (!check_token) {
		return <Login />;
	}

	return (
		<div className="App">
			<Dashboard />
		</div>
	);
}

export default App;
