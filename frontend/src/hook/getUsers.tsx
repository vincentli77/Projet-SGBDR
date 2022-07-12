/* eslint-disable prettier/prettier */
export async function getUsers(promotion) {

	const response = await fetch("http://localhost:3333/usersPromo", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
        body:promotion
	});
    const users = await response.json();
    return users
    
}
