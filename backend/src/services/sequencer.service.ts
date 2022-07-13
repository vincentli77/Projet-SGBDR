import { interpret } from "xstate";
import { SshUserConfig } from "../interfaces/ssh";
import { sequencer } from "../helpers/tests.sequencer";
import { stateMachineContext } from "../helpers/tests.sequencer";
import { UserResult } from "../interfaces/user.interface";

/**
 * It creates a state machine interpreter that will run the state machine defined in the `sequencer.ts`
 * file, and will log the state machine's context, events, changes, and completion
 * @param {SshUserConfig} config - SshUserConfig - this is the configuration object that is passed to
 * the service.
 * @param {UserResult} userResult - This is the result of the user input.
 */
export const sequencerService = (config: SshUserConfig, userResult: UserResult) =>
	interpret(sequencer.withContext({ ...stateMachineContext, ssh: config, userResult }))
		.onTransition((state) => console.log("ON_TRANSITION: ", state.context))
		.onEvent((listener) => console.log("ON_EVENT: ", listener))
		.onChange((listener) => console.log("ON CHANGE: ", listener))
		.onDone((listener) => console.log("ON_DONE: ", listener))
		.start();
