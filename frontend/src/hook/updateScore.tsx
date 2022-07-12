/* eslint-disable prettier/prettier */
export async function updateScore(data) {

	const response = await fetch("http://localhost:3333/updateScoreUser", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(data),
	});

    /*
    exemple : body  
    "user_id":
	"challenge_id":
    "score" : "10"
    */
    const users = await response.json();
	
    return users
    
}
