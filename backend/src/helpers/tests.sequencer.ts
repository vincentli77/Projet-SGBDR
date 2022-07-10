import { assign, createMachine, DoneInvokeEvent, send } from "xstate";
import { SshUserConfig } from "../interfaces/ssh";
import { uptimeService } from "../services/uptime.service";
import { exercice01, exercice02, exercice03, exercice04, exercice05 } from "../tests/exercices/index";

// This function update the database with the new score and return the value to update the context
const updateScore = (context: StateMachineContext) => context.score + 1;

interface StateMachineContext {
	ssh: SshUserConfig;
	score: number;
	isConnected: boolean;
	errorMessage: string | undefined;
}

export const stateMachineContext: StateMachineContext = {
	ssh: { port: null, host: null, username: null } as SshUserConfig,
	score: 0,
	isConnected: false,
	errorMessage: undefined,
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
						score: (context: StateMachineContext) => updateScore(context),
					}),
				},
				onError: {
					target: "termination",
					actions: assign({ errorMessage: (context, event) => event.data }),
				},
			},
		},

		/**
		 *
		 */
		exercice01: { on: { TEST_DOING: { target: "exercice01_invoke" } } },
		exercice01_invoke: {
			invoke: {
				id: "exercice01",
				src: async (context) => await exercice01(context.ssh),
				onDone: {
					target: "exercice02",
					actions: assign({ score: (context: StateMachineContext) => updateScore(context) }),
				},
				onError: {
					target: "exercice01",
					actions: assign({ errorMessage: (context, event) => event.data }),
				},
			},
		},

		/**
		 *
		 */
		exercice02: { on: { TEST_DOING: { target: "exercice02_invoke" } } },
		exercice02_invoke: {
			invoke: {
				id: "exercice02",
				src: async (context) => await exercice02(context.ssh),
				onDone: {
					target: "exercice03",
					actions: assign({ score: (context: StateMachineContext) => updateScore(context) }),
				},
				onError: {
					target: "exercice02",
					actions: assign({ errorMessage: (context, event) => event.data }),
				},
			},
		},

		/**
		 *
		 */
		exercice03: { on: { TEST_DOING: { target: "exercice03_invoke" } } },
		exercice03_invoke: {
			invoke: {
				id: "exercice03",
				src: async (context) => await exercice03(context.ssh),
				onDone: {
					target: "exercice04",
					actions: assign({ score: (context: StateMachineContext) => updateScore(context) }),
				},
				onError: {
					target: "exercice03",
					actions: assign({ errorMessage: (context, event) => event.data }),
				},
			},
		},

		/**
		 *
		 */
		exercice04: { on: { TEST_DOING: { target: "exercice04_invoke" } } },
		exercice04_invoke: {
			invoke: {
				id: "exercice04",
				src: async (context) => await exercice04(context.ssh),
				onDone: {
					target: "exercice05",
					actions: assign({ score: (context: StateMachineContext) => updateScore(context) }),
				},
				onError: {
					target: "termination",
					actions: assign({ errorMessage: (context, event) => event.data }),
				},
			},
		},

		/**
		 *
		 */
		exercice05: { on: { TEST_DOING: { target: "exercice05_invoke" } } },
		exercice05_invoke: {
			invoke: {
				id: "exercice05",
				src: async (context) => await exercice05(context.ssh),
				onDone: {
					target: "termination",
					actions: assign({ score: (context: StateMachineContext) => updateScore(context) }),
				},
				onError: {
					target: "exercice05",
					actions: assign({ errorMessage: (context, event) => event.data }),
				},
			},
		},
		termination: { type: "final" },
	},
});
