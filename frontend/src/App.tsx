import { Table } from "./Components/Table.component";
import React from "react";
import "./App.css";
import { SideBar } from "./components/SideBar.component";

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
			</div>
		</div>
	);
}

export default App;
