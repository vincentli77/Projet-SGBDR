import React from "react";
import "./App.scss";
import { Login } from "./Pages/login/Login";
import { checkToken } from "./hook/useCheckToken";
import { Dashboard } from "./Pages/Dashboard/Login/Dashboard";

function App() {
	const check_token = checkToken();

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
