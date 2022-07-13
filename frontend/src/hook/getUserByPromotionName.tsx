/* eslint-disable prettier/prettier */
export async function getUserByPromotionName(promotion) {

	console.log(promotion);
	
	
	const response = await fetch(`http://localhost:3333/usersPromo/?promotion=${promotion.promotion}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
    const users = await response.json();
	
    return users
    
}
