import { useEffect, useState } from "react";
import { accessRefresh } from "./useAccessToken";
import { tokenRefresh } from "./useTokenRefresh";

export function checkToken() {
	const [refreshToken, setRefreshToken] = useState<unknown>(JSON.parse(sessionStorage.getItem("refresh_token")));
	const [access_token, setAccessToken] = useState<unknown>(JSON.parse(sessionStorage.getItem("access_token")));
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
		const payload = JSON.parse(window.atob(refreshToken.split(".")[1]));
		sessionStorage.setItem("email", payload.email);
		newAccessToken.then(function (result) {
			if (result.accessToken) {
				sessionStorage.setItem("access_token", JSON.stringify(result.accessToken));
				setCheckToken(true);
			} else {
				setCheckToken(false);
			}
		});
	}

	return check_token;
}
