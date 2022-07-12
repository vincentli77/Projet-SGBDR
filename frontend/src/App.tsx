import React, { useState } from "react";
import "./App.scss";
import { Login } from "./Pages/login/Login";
import { checkToken } from "./hook/useCheckToken";
import { Dashboard } from "./Pages/Dashboard/Login/Dashboard";
import { getUserInfo } from "./hook/getUserInfo";

function App() {
	const check_token = checkToken();

	const email = sessionStorage.getItem("email");
	const role = sessionStorage.getItem("role");
	if (email) {
		getUserInfo({ email }).then(function (result) {
			sessionStorage.setItem("role", result.user[0].role);
		});
	}

	if (!check_token) {
		return <Login />;
	}

	return role == "admin" ? (
		<div className="App">
			<Dashboard />
		</div>
	) : null;
}

export default App;
