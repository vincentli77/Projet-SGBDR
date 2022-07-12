/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./all-challenge.scss";

export const ChallengeTwo = (): JSX.Element => {
	return (
		<div className="big-container">
			<div className="container">
				<h1 className="score">Votre score : 2/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Troisième challenge à 4 point - Find shell</p>
						<br></br>
						<p>Télécharger le zip de node à la racine : https://github.com/nodejs/node/archive/refs/tags/v18.0.0.zip Décompresser le fichier zip v18.0.0.zip Votre tâche est décrire un script nommé find.sh permettant de compter le nombre de fichier avec l'extension .js</p>
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
