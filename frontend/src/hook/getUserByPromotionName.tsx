/* eslint-disable prettier/prettier */
export async function getUserByPromotionName(promotion) {

	
	const response = await fetch("http://localhost:3333/usersPromo", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(promotion),
	});
    const users = await response.json();
	
    return users
    
}
