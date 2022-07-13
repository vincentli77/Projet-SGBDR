import { assign, createMachine, DoneInvokeEvent } from "xstate";
import { SshUserConfig, Uptime } from "../interfaces/ssh";
import { uptimeService } from "../services/uptime.service";
import { EvaluationTestResult } from "../interfaces/evaluation.interface";
import { exercice01, exercice02, exercice03, exercice04, exercice05 } from "../tests/exercices/index";
import { updateUserScoreService } from "../services/user.service";
import { UserResult } from "../interfaces/user.interface";

export interface StateMachineContext {
	ssh: SshUserConfig;
	userResult: UserResult;
	score: number;
	isConnected: boolean;
	errorMessage: string | undefined;
}

export const stateMachineContext: StateMachineContext = {
	ssh: { port: null, host: null, username: null } as SshUserConfig,
	userResult: { email: null, challenge_name: null, promotion_name: null } as UserResult,
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
					target: "connected",
					actions: assign({
						isConnected: (context, event: DoneInvokeEvent<Uptime>) => event.data.connected,
						score: (context: StateMachineContext) => 1,
					}),
				},
				onError: {
					target: "termination",
					actions: assign({
						errorMessage: (context, event: DoneInvokeEvent<EvaluationTestResult>) => event.data.error,
					}),
				},
			},
		},
		connected: {
			invoke: {
				id: "connection",
				src: async (context: StateMachineContext) =>
					await updateUserScoreService(context.userResult, context.score),
				onDone: {
					target: "exercice01",
				},
				onError: {
					target: "termination",
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
					target: "exercice01_success",
					actions: assign({ score: (context: StateMachineContext) => 2 }),
				},
				onError: {
					target: "exercice01",
					actions: assign({
						errorMessage: (context, event: DoneInvokeEvent<EvaluationTestResult>) => event.data.error,
					}),
				},
			},
		},
		exercice01_success: {
			invoke: {
				id: "exercice01_success",
				src: async (context: StateMachineContext) =>
					await updateUserScoreService(context.userResult, context.score),
				onDone: {
					target: "exercice02",
				},
				onError: {
					target: "termination",
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
					target: "exercice02_success",
					actions: assign({ score: (context: StateMachineContext) => 6 }),
				},
				onError: {
					target: "exercice02",
					actions: assign({
						errorMessage: (context, event: DoneInvokeEvent<EvaluationTestResult>) => event.data.error,
					}),
				},
			},
		},
		exercice02_success: {
			invoke: {
				id: "exercice02_success",
				src: async (context: StateMachineContext) =>
					await updateUserScoreService(context.userResult, context.score),
				onDone: {
					target: "exercice03",
				},
				onError: {
					target: "termination",
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
					target: "exercice03_success",
					actions: assign({ score: (context: StateMachineContext) => 10 }),
				},
				onError: {
					target: "exercice03",
					actions: assign({
						errorMessage: (context, event: DoneInvokeEvent<EvaluationTestResult>) => event.data.error,
					}),
				},
			},
		},
		exercice03_success: {
			invoke: {
				id: "exercice03_success",
				src: async (context: StateMachineContext) =>
					await updateUserScoreService(context.userResult, context.score),
				onDone: {
					target: "exercice04",
				},
				onError: {
					target: "termination",
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
					target: "exercice04_success",
					actions: assign({ score: (context: StateMachineContext) => 15 }),
				},
				onError: {
					target: "termination",
					actions: assign({
						errorMessage: (context, event: DoneInvokeEvent<EvaluationTestResult>) => event.data.error,
					}),
				},
			},
		},
		exercice04_success: {
			invoke: {
				id: "exercice04_success",
				src: async (context: StateMachineContext) =>
					await updateUserScoreService(context.userResult, context.score),
				onDone: {
					target: "exercice05",
				},
				onError: {
					target: "termination",
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
					target: "exercice05_success",
					actions: assign({ score: (context: StateMachineContext) => 20 }),
				},
				onError: {
					target: "exercice05",
					actions: assign({
						errorMessage: (context, event: DoneInvokeEvent<EvaluationTestResult>) => event.data.error,
					}),
				},
			},
		},
		exercice05_success: {
			invoke: {
				id: "exercice05_success",
				src: async (context: StateMachineContext) =>
					await updateUserScoreService(context.userResult, context.score),
				onDone: {
					target: "termination",
				},
				onError: {
					target: "termination",
				},
			},
		},

		termination: { type: "final" },
	},
});
