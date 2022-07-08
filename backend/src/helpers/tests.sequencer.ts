import { assign, createMachine } from "xstate";

import { verifyIfFileExistOnRemoteSession, countJsFileOnRemoteSession, convertInMsOnRemoteSession, verifyIfIpIsValidOnRemoteSession, findSmallestNumberOnRemoteSession } from "../tests/index";

// This function update the database with the new score and return the value to update the context
const updateScore = () => 1;

const sequencer = createMachine({
	id: "assessment-tests-sequencer",
	initial: "disconnected",
	context: {
		score: 0,
		canProceed: false,
	},
	states: {
		// TODO:[important, not urgent] Replace the empty function by the result of the uptimeService
		disconnected: {
			on: { CONNECT: { target: "connected", cond: () => true } },
		},
		connected: {
			on: {
				START: {
					target: "exercice01",
					actions: assign({ score: updateScore }),
				},
			},
		},

		exercice01: {
			on: {
				TEST_DOING: {
					target: "exercice02",
					actions: assign({ score: updateScore }),
					cond: () =>
						verifyIfFileExistOnRemoteSession({
							stdin: "",
							stdout: "",
						}).isSuccess,
				},
			},
		},
		exercice02: {
			on: {
				TEST_DOING: {
					target: "exercice03",
					actions: assign({ score: updateScore }),
					cond: () => countJsFileOnRemoteSession({ stdin: "", stdout: "" }).isSuccess,
				},
			},
		},
		exercice03: {
			on: {
				TEST_DOING: {
					target: "exercice04",
					actions: assign({ score: updateScore }),
					cond: () => convertInMsOnRemoteSession({ stdin: "", stdout: "" }).isSuccess,
				},
			},
		},
		exercice04: {
			on: {
				TEST_DOING: {
					target: "exercice05",
					actions: assign({ score: updateScore }),
					cond: () =>
						verifyIfIpIsValidOnRemoteSession({
							stdin: "",
							stdout: "",
						}).isSuccess,
				},
			},
		},
		exercice05: {
			on: {
				TEST_DOING: {
					target: "disconnected",
					actions: assign({ score: updateScore }),
					cond: () =>
						findSmallestNumberOnRemoteSession({
							stdin: "",
							stdout: "",
						}).isSuccess,
				},
			},
		},
		termination: { type: "final" },
	},

	onDone: "disconnected",
});
