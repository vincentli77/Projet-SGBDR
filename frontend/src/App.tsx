import React, { useEffect, useState } from "react";
import "./App.scss";
import { Login } from "./Pages/login/Login";
import { checkToken } from "./hook/useCheckToken";
import { Dashboard } from "./Pages/Dashboard/Login/Dashboard";
import { Challenge } from "./Pages/Challenge/Challenge";
import { getUserInfo } from "./hook/getUserInfo";
import { Subscribe } from "./Pages/Challenge/AllChallenge/Subscribe";

function App() {
	const check_token = checkToken();

	const [user, setUser] = useState([]);
	const storeUser = () => {
		const email = sessionStorage.getItem("email");
		if (email) {
			getUserInfo({ email }).then(function (result) {
				sessionStorage.setItem("user", JSON.stringify(result.user));
				setUser(JSON.parse(sessionStorage.getItem("user")));
			});
		}
	};

	useEffect(() => {
		storeUser();
	}, []);

	const subs = () => {
		storeUser();
	};

	if (!check_token) {
		return <Login />;
	}

	if (user[0] != undefined) {
		if (user[0].role == "admin") {
			return (
				<div className="App">
					<Dashboard />
				</div>
			);
		}
		return <Challenge />;
	}
	return <Subscribe subs={subs} />;
}

export default App;
