/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const ChallengeThree = (): JSX.Element => {
	return (
		<div>
			<p>Votre score : 6/20</p>
			<br></br>
			<p>Quatrième challenge à 4 point - Clock</p>
			<br></br>
			<p>
				Votre tache est d'écrire un script nommé "clock.sh" qui prendra en paramètre les heures, les minutes et les secondes. Le première paramètre est le nombre d'heure, le deuxième paramètre est le nombre de minute et le troisième paramètre est le nombre de seconde. Ce script convertira la
				somme des paramètres en millisecondes.Exemple : "bash clock.sh 1 20 25" retournera "4825000"{" "}
			</p>
			<button>Tester</button>
		</div>
	);
};
