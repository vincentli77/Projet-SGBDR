/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import "./Challenge.scss";
import { Introduction } from "./AllChallenge/Introduction";
import { ChallengeFour } from "./AllChallenge/ChallengeFive";
import { ChallengeTwo } from "./AllChallenge/ChallengeThree";
import { ChallengeThree } from "./AllChallenge/ChallengeFour";
import { ChallengeFive } from "./AllChallenge/ChallengeSix";
import { ChallengeOne } from "./AllChallenge/ChallengeTwo";
import { sshChallenge } from "../../hook/sshChallenge";

export const Challenge = (): JSX.Element => {
	const step = 6;

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
