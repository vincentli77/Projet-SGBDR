/* eslint-disable prettier/prettier */
export async function createUser(userInfo) {

	const response = await fetch("http://localhost:3333/user/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body:JSON.stringify(userInfo),


	});
    const user = await response.json();
    return user
    
}
