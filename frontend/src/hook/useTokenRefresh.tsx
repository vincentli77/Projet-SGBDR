/* eslint-disable prettier/prettier */
export async function tokenRefresh(token) {

	const response = await fetch("http://localhost:3333/refreshToken", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + token,
		},
	});
    const Alltoken = await response.json();
    return Alltoken
    
}
