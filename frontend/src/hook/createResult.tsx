/* eslint-disable prettier/prettier */
export async function createResult(userInfo) {
	

	const response = await fetch("http://localhost:3333/result/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body:JSON.stringify(userInfo),
/* {
	exemple body : 
    "email": "pelintune1@de.vu",
	"challenge_name":"Unix",
    "promotion_name" : "MT4_2022"
}*/


	});
    const user = await response.json();
    return user
    
}
