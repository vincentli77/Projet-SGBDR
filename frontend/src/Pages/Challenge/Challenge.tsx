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
import { Subscribe } from "./AllChallenge/Subscribe";

export const Challenge = (): JSX.Element => {
	const step = 1;

	switch (step) {
		case 1:
			return <Subscribe />;
		case 2:
			return <Introduction />;
		case 3:
			return <ChallengeOne />;
		case 4:
			return <ChallengeTwo />;
		case 5:
			return <ChallengeThree />;
		case 6:
			return <ChallengeFour />;
		case 7:
			return <ChallengeFive />;
	}
};
