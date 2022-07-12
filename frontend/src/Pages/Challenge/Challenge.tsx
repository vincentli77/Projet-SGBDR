/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import "./Challenge.scss";
import { Introduction } from "./AllChallenge/Introduction";
import { ChallengeFour } from "./AllChallenge/ChallengeFour";
import { ChallengeTwo } from "./AllChallenge/ChallengeTwo";
import { ChallengeThree } from "./AllChallenge/ChallengeThree";
import { ChallengeFive } from "./AllChallenge/ChallengeFive";
import { ChallengeOne } from "./AllChallenge/ChallengeOne";
import { sshChallenge } from "../../hook/sshChallenge";

export const Challenge = (): JSX.Element => {
	const step = 5;

	switch (step) {
		case 1:
			return <Introduction />;
		case 2:
			return <ChallengeOne />;
		case 3:
			return <ChallengeTwo />;
		case 4:
			return <ChallengeThree />;
		case 5:
			return <ChallengeFour />;
		case 6:
			return <ChallengeFive />;
	}
};
