/* eslint-disable prettier/prettier */
export async function accessRefresh(token) {

	const response = await fetch("http://localhost:3333/accessToken", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + token,
		},
	});
    const access_token = await response.json();
    return access_token
    
}
