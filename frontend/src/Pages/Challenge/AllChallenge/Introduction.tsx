/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const Introduction = (): JSX.Element => {
	return (
		<div className="container">
			Votre score
			<div>
				<div>
					<p>Consigne</p> <br></br>
					<p>Bienvenue sur le challenge SHELL !</p>
					<br></br>
					<p>Vous allez configurer et déployer votre propre instance Ubuntu, et renseigner les coordonées de connexion sur cette page. Ce système va procéder à exécuter un certain nombre de tests selon les critères listées ici. Votre score sera calculé automatiquement. </p>
					<br></br>Première challenge à 1 point - Connexion SSH
					<p>
						Votre première tache est de nous réussir la connexion SSH. Pour celà vous devez ajouter l’adresse publique suivante à votre instance SSH :<br></br>
					</p>
					<br></br>
					<p>
						ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCdgu91eogFaY53Ngc0LecfbhM q0WYX7xRe1gP+q5jrAsG3KIJV4gJkEqBiq5ChPV9n7vdgKagppMUhOY70 sYk10ScPd1BqfnYz9EjjFngSH8dfCmEqd1aASsUvGEdrlCSalJx6KLkoFj kPD3xaFfqjwEPtvdk3sZZPs5UvuOCiYMNoniYhXoE+23fnAl8c8BTle6nTSZ
						bhpwjWVqG07zasDYB2pGjL97/9LJSeiKL7uZv/9fesFqZ7bAI9nyOh6S8fzPtr5 OD6IPNxQby/4BRDmdRa/NRWU8kycylEdRdR1Aod5hc7m0j/2aXzKzpeVx3Y+PvNIdB4b2i6l2L96ym5
					</p>
				</div>
				<br></br>
				<div>
					<div>
						<p>Host</p>
						<input placeholder="192.0.0.1"></input>
					</div>
					<div>
						<p>Port</p>
						<input placeholder="22"></input>
					</div>
					<div>
						<p>Username</p>
						<input placeholder="root"></input>
					</div>
				</div>

				<button>Tester la connexion</button>
			</div>
		</div>
	);
};
