/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./all-challenge.scss";

export const ChallengeOne = (): JSX.Element => {
	return (
		<div className="big-container">
			<div className="container">
				<h1 className="score">Votre score : 1/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Deuxième challenge à 1 point - hello.txtVotre tâche est d'écrire un fichier nommé "hello.txt" à la racine de votre serveur.</p>
						<p>Votre tâche est d'écrire un fichier nommé "hello.txt" à la racine de votre serveur. </p>
						<div className="buttons">
							<div id="btn-wrapper">
								<button className="check-btn" name="check-btn">
									Tester
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
