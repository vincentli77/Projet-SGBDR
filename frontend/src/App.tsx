import React from "react";
import "./App.scss";
import { Login } from "./Pages/Login/Login";
import { checkToken } from "./hook/useCheckToken";

function App() {
	const check_token = checkToken();
	if (!check_token) {
		return <Login />;
	}
	return (
		<div className="App">
			<div className="AppGlass">
				<SideBar />
			</div>
		</div>
	);
}

export default App;
