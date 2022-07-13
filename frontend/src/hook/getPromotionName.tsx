/* eslint-disable prettier/prettier */
export async function getPromotionName() {

	
	const response = await fetch("http://localhost:3333/promotions", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
    const users = await response.json();
	
    return users
    
}
