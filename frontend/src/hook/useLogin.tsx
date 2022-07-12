export async function loginUser(data) {
	const email = { email: data.email };

	return fetch("http://localhost:3333/mailProvider", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(email),
	})
		.then((data) => {
			if (data.status == 200) {
				alert("Le mail a été envoyé");
			} else {
				alert("Un problème est survenue veuillez réessayer");
			}
		})
		.catch((error) => {
			alert("Un problème est survenue veuillez réessayer");
		});
}
