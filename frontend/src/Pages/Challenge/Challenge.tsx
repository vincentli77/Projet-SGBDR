/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import "./Challenge.scss";
import { Introduction } from "./AllChallenge/Introduction";
import { ChallengeFour } from "./AllChallenge/ChallengeFour";
import { ChallengeTwo } from "./AllChallenge/ChallengeTwo";
import { ChallengeThree } from "./AllChallenge/ChallengeThree";
import { ChallengeFive } from "./AllChallenge/ChallengeFive";
import { ChallengeOne } from "./AllChallenge/ChallengeOne";
import { sshChallenge } from "../../hook/sshChallenge";
import { Subscribe } from "./AllChallenge/Subscribe";
import { getStepButtonUtilityClass } from "@mui/material";

export const Challenge = (): JSX.Element => {
	const [step, setStep] = useState(0);

	function getStepValue(a) {
		setStep(a.score);
	}

	switch (step) {
		case 0:
			return <Introduction getStep={getStepValue} />;
		case 1:
			return <ChallengeOne getStep={getStepValue} />;
		case 2:
			return <ChallengeTwo getStep={getStepValue} />;
		case 6:
			return <ChallengeThree getStep={getStepValue} />;
		case 10:
			return <ChallengeFour getStep={getStepValue} />;
		case 15:
			return <ChallengeFive getStep={getStepValue} />;
		case 20:
			return <p>gg wp</p>;
	}
};
