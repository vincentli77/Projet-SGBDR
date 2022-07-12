import React from "react";
import "./test-one.scss";

export const TestOne = (): JSX.Element => {
	return (
		<div className="input-test-one">
			SSH key:
			<input
				className="ssh-key"
				placeholder="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCdgu91eogFaY53Ngc0LecfbhMq0WYX7xRe1gP+q5jrAsG3KIJV4gJkEqBiq5ChPV9n7vdgKagppMUhOY70sYk10ScPd1BqfnYz9EjjFngSH8dfCmEqd1aASsUvGEdrlCSalJx6KLkoFjkPD3xaFfqjwEPtvdk3sZZPs5UvuOCiYMNoniYhXoE+23fnAl8c8BTle6nTSZbhpwjWVqG07zasDYB2pGjL97/9LJSeiKL7uZv/9fesFqZ7bAI9nyOh6S8fzPtr5OD6IPNxQby/4BRDmdRa/NRWU8kycylEdRdR1Aod5hc7m0j/2aXzKzpeVx3Y+PvNIdB4b2i6l2L96ym5"
				type="text"
			/>
			Host:
			<input type="text" placeholder="192.0.0.1" />
			Port:
			<input type="text" placeholder="22" />
			Username:
			<input type="text" placeholder="root" />
		</div>
	);
};
