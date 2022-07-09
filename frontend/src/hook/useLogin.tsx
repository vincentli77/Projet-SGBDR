export async function loginUser(data) {
	const email = { email: data.email };

	return fetch("http://localhost:3000/mailProvider", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(email),
	}).then((data) => data.json());
}
