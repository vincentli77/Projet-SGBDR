/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { evaluationFlow } from "../../../hook/evaluationFlow";
import "./all-challenge.scss";
interface Props {
	getStep: any;
}
export const ChallengeTwo = (props: Props): JSX.Element => {
	const dataSSH = JSON.parse(sessionStorage.getItem("dataSSH"));
	const [errorMessage, setErrorMessage] = useState("");

	function evaluation() {
		evaluationFlow(dataSSH).then(function (result) {
			sessionStorage.setItem("dataSSH", JSON.stringify(dataSSH));
			props.getStep(result);
			setErrorMessage(result.errorMessage);
		});
	}
	return (
		<div className="big-container">
			<div className="container">
				<h1 className="score">Votre score : 2/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Troisième challenge à 4 point - Find shell</p>
						<br></br>
						<p>Télécharger le zip de node à la racine : https://github.com/nodejs/node/archive/refs/tags/v18.0.0.zip Décompresser le fichier zip v18.0.0.zip Votre tâche est décrire un script nommé find.sh permettant de compter le nombre de fichier avec l'extension .js</p>
						<p>Error : {errorMessage}</p>
						<div className="buttons">
							<div id="btn-wrapper">
								<button
									className="check-btn"
									name="check-btn"
									onClick={() => {
										evaluation();
									}}
								>
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
