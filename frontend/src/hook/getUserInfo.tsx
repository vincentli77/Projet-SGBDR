/* eslint-disable prettier/prettier */
export async function getUserInfo(email) {

	const response = await fetch("http://localhost:3333/user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body:JSON.stringify(email),

	});
    const users = await response.json();
    return users
    
}
