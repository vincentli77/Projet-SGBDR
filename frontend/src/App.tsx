import React from "react";
import "./App.scss";
import { Login } from "./Pages/login/Login";
import { checkToken } from "./hook/useCheckToken";
import { Dashboard } from "./Pages/Dashboard/Login/Dashboard";
import { Challenge } from "./Pages/Challenge/Challenge";

function App() {
	const check_token = checkToken();

	const user = "student";

	if (!check_token && user != "admin") {
		return <Login />;
	}
	if (user == "admin") {
		return (
			<div className="App">
				<Dashboard />
			</div>
		);
	}
	return <Challenge />;
}

export default App;
