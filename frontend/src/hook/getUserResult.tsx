/* eslint-disable prettier/prettier */
export async function getUserResult(data) {

	const response = await fetch("http://localhost:3333/result", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
    const users = await response.json();
    return users

}
