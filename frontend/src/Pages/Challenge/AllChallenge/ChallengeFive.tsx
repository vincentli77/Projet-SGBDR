/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const ChallengeFour = (): JSX.Element => {
	return (
		<div className="big-container">
			<div className="container">
				<h1 className="score">Votre score : 5/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Cinquième challenge à 5 point - Clock</p>
						<br></br>
						<p>
							Votre tâche est d'écrire un script nommé "checkip.sh" qui prendra en paramètre une ip Le script doit être capable de vérifier si une ip est valide. Une ip est valide si il est composé de quatre octets et ayant des valeurs allant de 0 à 255. Chaque octet doit être séparé
							par un point.
						</p>
						<p>
							Exemple d'ip valide : 1.2.3.4 111.222.159.124 192.0.0.1<br></br>Exemple d'ip invalide 1234 111.222.333.444 1.2.3 1.2.3.4.5
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
