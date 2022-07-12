/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./all-challenge.scss";

export const ChallengeFive = (): JSX.Element => {
	return (
		<div className="big-container">
			<div className="container">
				<h1 className="score">Votre score : 1/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Dernier challenge à 5 point - Clock</p>
						<br></br>
						<p>
							Votre tâche est d'écrire un script nommé "smallest.sh" qui prendra en paramètre un nombre positif et entier. Le script devra trouver le nombre le plus petit possible en déplaçant un chiffre. La réponse retourner devra être sous cette forme "nombreFinal indexSource
							indexCible"
						</p>
						<p>Exemple : "bash smallest.sh 9051" retournera "519 0 3" car on déplace "9" qui est à l'index source "0" à l'index cible "3" et on obtient donc 519</p>
						<p>Exemple 2 : "bash smallest.sh 3554" retournera "3455 3 1" car on déplace "4" qui est à l'index source "3" à l'index cible "1" et on obtient donc 3455</p>
						<p>Exemple 3 : "bash smallest.sh 341567" retournera "134567 2 0" car on déplace "1" qui est à l'index source "2" à l'index cible "0" et on obtient donc 134567</p>
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
