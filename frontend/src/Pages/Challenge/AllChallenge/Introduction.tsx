/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./introduction.scss";

export const Introduction = (): JSX.Element => {
	return (
		<div className="App">
			<div className="AppGlass">
				<h1 className="score">Votre score</h1>
				<div>
					<div className="cards">
						<br></br>
						<div className="card card-1">
							<div className="intro">Bienvenue sur le challenge SHELL !</div>
							<br></br>
							<p className="card_statement">
								Vous allez configurer et déployer votre propre instance Ubuntu, et renseigner les coordonées de connexion sur cette page. Ce système va procéder à exécuter un certain nombre de tests selon les critères listées ici. Votre score sera calculé automatiquement.{" "}
							</p>
							<br></br>Première challenge à 1 point - Connexion SSH
							<p>
								Votre première tache est de nous réussir la connexion SSH. Pour celà vous devez ajouter l’adresse publique suivante à votre instance SSH :<br></br>
							</p>
							<br></br>
							<p className="color-grey">
								ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCdgu91eogFaY53Ngc0LecfbhM q0WYX7xRe1gP+q5jrAsG3KIJV4gJkEqBiq5ChPV9n7vdgKagppMUhOY70 sYk10ScPd1BqfnYz9EjjFngSH8dfCmEqd1aASsUvGEdrlCSalJx6KLkoFj kPD3xaFfqjwEPtvdk3sZZPs5UvuOCiYMNoniYhXoE+23fnAl8c8BTle6nTSZ
								bhpwjWVqG07zasDYB2pGjL97/9LJSeiKL7uZv/9fesFqZ7bAI9nyOh6S8fzPtr5 OD6IPNxQby/4BRDmdRa/NRWU8kycylEdRdR1Aod5hc7m0j/2aXzKzpeVx3Y+PvNIdB4b2i6l2L96ym5
							</p>
						</div>
					</div>
					<br></br>
					<div>
						<div className="input-test-one">
							<input placeholder="Host: 192.0.0.1"></input>

							<input placeholder="Port: 22"></input>

							<input placeholder="Username: root"></input>
						</div>
					</div>

					<div className="buttons">
						<div id="btn-wrapper">
							<button className="check-btn" name="check-btn">
								Tester la connexion
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
