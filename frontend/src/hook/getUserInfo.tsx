/* eslint-disable prettier/prettier */
export async function getUserInfo(email:string) {
	
	const response = await fetch(`http://localhost:3333/user/?email=${email}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},

	});
    const users = await response.json();
    return users
    
}
