/* eslint-disable prettier/prettier */
export async function evaluationFlow(userInfo) {

	const response = await fetch("http://localhost:3333/evaluationFlow", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body:JSON.stringify(userInfo),


	});
    const user = await response.json();
    return user
    
}
