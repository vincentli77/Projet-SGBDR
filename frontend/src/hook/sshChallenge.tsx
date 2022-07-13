export async function sshChallenge(data) {
	const email = { email: data.email };

	return fetch("http://localhost:3333/mailProvider", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(email),
	}).then((data) => {
		return data;
	});
}
