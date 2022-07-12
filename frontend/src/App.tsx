import React, { useState } from "react";
import "./App.scss";
import { Login } from "./Pages/login/Login";
import { checkToken } from "./hook/useCheckToken";
import { Dashboard } from "./Pages/Dashboard/Login/Dashboard";
import { Challenge } from "./Pages/Challenge/Challenge";
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

	if (!check_token && user[0].role !== "admin") {
		return <Login />;
	}
	if (user[0].role == "admin") {
		return (
			<div className="App">
				<Dashboard />
			</div>
		);
	}
	return <Challenge />;
}

export default App;
