import { assign, createMachine, DoneInvokeEvent, send } from "xstate";
import { SshUserConfig } from "../interfaces/ssh";
import { uptimeService } from "../services/uptime.service";
import { exercice01, exercice02, exercice03, exercice04, exercice05 } from "../tests/exercices/index";

// This function update the database with the new score and return the value to update the context
const updateScore = () => 1;

export const stateMachineContext = {
	ssh: { port: null, host: null, username: null } as SshUserConfig,
	score: 0,
	isConnected: false,
};

export const sequencer = createMachine({
	id: "assessment-tests-sequencer",
	initial: "disconnected",
	context: stateMachineContext,
	states: {
		/**
		 *
		 */
		disconnected: {
			invoke: {
				id: "uptime",
				src: async ({ ssh: { host, port, username } }) => await uptimeService({ host, port, username }),
				onDone: {
					target: "exercice01",
					actions: assign({
						isConnected: (context, event: DoneInvokeEvent<{ connected: boolean }>) => event.data.connected,
						score: updateScore(),
					}),
				},
				onError: { target: "termination" },
			},
		},

		/**
		 *
		 */
		exercice01: { on: { TEST_DOING: { target: "exercice01_invoke" } } },
		exercice01_invoke: {
			invoke: {
				id: "exercice01",
				src: async () => await exercice01(),
				onDone: { target: "exercice02", actions: assign({ score: updateScore() }) },
				onError: { target: "exercice01" },
			},
		},

		/**
		 *
		 */
		exercice02: { on: { TEST_DOING: { target: "exercice02_invoke" } } },
		exercice02_invoke: {
			invoke: {
				id: "exercice02",
				src: async () => await exercice02(),
				onDone: { target: "exercice03", actions: assign({ score: updateScore() }) },
				onError: { target: "exercice02" },
			},
		},

		/**
		 *
		 */
		exercice03: { on: { TEST_DOING: { target: "exercice03_invoke" } } },
		exercice03_invoke: {
			invoke: {
				id: "exercice03",
				src: async () => await exercice03(),
				onDone: { target: "exercice04", actions: assign({ score: updateScore() }) },
				onError: { target: "exercice03" },
			},
		},

		/**
		 *
		 */
		exercice04: { on: { TEST_DOING: { target: "exercice04_invoke" } } },
		exercice04_invoke: {
			invoke: {
				id: "exercice04",
				src: async () => await exercice04(),
				onDone: { target: "exercice05", actions: assign({ score: updateScore() }) },
				onError: { target: "exercice04" },
			},
		},

		/**
		 *
		 */
		exercice05: { on: { TEST_DOING: { target: "exercice05_invoke" } } },
		exercice05_invoke: {
			invoke: {
				id: "exercice05",
				src: async () => await exercice05(),
				onDone: { target: "termination", actions: assign({ score: updateScore() }) },
				onError: { target: "exercice05" },
			},
		},
		termination: { type: "final" },
	},
});
