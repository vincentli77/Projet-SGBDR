/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./all-challenge.scss";

export const ChallengeThree = (): JSX.Element => {
	return (
		<div className="big-container">
			<div className="container">
				<h1 className="score">Votre score : 6/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Quatrième challenge à 4 point - Clock</p>
						<br></br>
						<p>
							Votre tache est d'écrire un script nommé "clock.sh" qui prendra en paramètre les heures, les minutes et les secondes. Le première paramètre est le nombre d'heure, le deuxième paramètre est le nombre de minute et le troisième paramètre est le nombre de seconde. Ce script
							convertira la somme des paramètres en millisecondes.Exemple : "bash clock.sh 1 20 25" retournera "4825000"{" "}
						</p>
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
