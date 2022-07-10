import { Table } from "./Components/Table.component";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Login } from "./Pages/Login/Login";
import { accessRefresh } from "./hook/useAccessToken";
import { tokenRefresh } from "./hook/useTokenRefresh";

function App() {
	const [refreshToken, setRefreshToken] = useState(JSON.parse(sessionStorage.getItem("refresh_token")));
	const [access_token, setAccessToken] = useState(JSON.parse(sessionStorage.getItem("access_token")));
	const [check_token, setCheckToken] = useState(false);
	const url = window.location;

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		access_token ? null : setAccessToken(new URLSearchParams(url.search).get("token"));
	}, []);

	if (access_token) {
		sessionStorage.setItem("access_token", JSON.stringify(access_token));
	}

	if (access_token && !refreshToken) {
		const Alltoken = tokenRefresh(access_token);
		Alltoken.then(function (result) {
			setRefreshToken(result.refreshToken);
			sessionStorage.setItem("refresh_token", JSON.stringify(result.refreshToken));
			setCheckToken(true);
		});
	}

	if (access_token && refreshToken) {
		const newAccessToken = accessRefresh(refreshToken);
		newAccessToken.then(function (result) {
			if (result.accessToken) {
				sessionStorage.setItem("access_token", JSON.stringify(result.accessToken));
				setCheckToken(true);
			} else {
				setCheckToken(false);
			}
		});
	}

	if (!check_token) {
		return <Login />;
	}
	return (
		<div className="App">
			<div className="AppGlass">
				<SideBar />
			<p>connected</p>
			<div className="AppGlass">
				<Table users={[]} />
			</div>
		</div>
	);
}

export default App;
