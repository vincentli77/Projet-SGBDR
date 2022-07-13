/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { evaluationFlow } from "../../../hook/evaluationFlow";
import "./all-challenge.scss";

interface Props {
	getStep: any;
}

export const ChallengeOne = (props: Props): JSX.Element => {
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
				<h1 className="score">Votre score : 1/20</h1>
				<div className="cards">
					<div className="card card-2">
						<p className="card_statement">Deuxieme challenge à 1 point - hello.txtVotre tâche est d'écrire un fichier nommé "hello.txt" à la racine de votre serveur.</p>
						<p>Votre tâche est d'écrire un fichier nommé "hello.txt" à la racine de votre serveur. </p>
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
