import { interpret } from "xstate";
import { SshUserConfig } from "../interfaces/ssh";
import { sequencer } from "../helpers/tests.sequencer";
import { stateMachineContext } from "../helpers/tests.sequencer";

export const sequencerService = (config: SshUserConfig) =>
	interpret(sequencer.withContext({ ...stateMachineContext, ssh: config }))
		.onTransition((state) => console.log("ON_TRANSITION: ", state.context))
		.onEvent((listener) => console.log("ON_EVENT: ", listener))
		.onChange((listener) => console.log("ON CHANGE: ", listener))
		.onDone((listener) => console.log("ON_DONE: ", listener))
		.start();
