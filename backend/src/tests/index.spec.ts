import {
	verifyIfFileExistOnRemoteSession,
	countJsFileOnRemoteSession,
	convertInMsOnRemoteSession,
	verifyIfIpIsValidOnRemoteSession,
	findSmallestNumberOnRemoteSession,
} from "./index";
import { Client } from "ssh2";
import { defaultTest } from "./challenge/defaultTest";

// TODO:[] Revoir les tests avaec l'encapsulation
describe("Challenge #1 : Unix Challenge", () => {
	// Test 1 - Verify if hello.txt exist
	defaultTest(
		verifyIfFileExistOnRemoteSession({
			connection: new Client(),
			stdin: "ls hello.txt",
			stdout: "hello.txt\n",
		}),
	);

	// Test 2 - Count the number of .js file in node18.0.0 folder by starting a script
	defaultTest(
		countJsFileOnRemoteSession({
			connection: new Client(),
			stdin: "bash find.sh",
			stdout: "15979\n",
		}),
	);

	// Test 3 - Convert hours, minutes and seconds to millinseconds by starting a script
	defaultTest(
		convertInMsOnRemoteSession({
			connection: new Client(),
			stdin: "bash clock.sh 24 60 60",
			stdout: "90060000\n",
		}),
	);
	defaultTest(
		convertInMsOnRemoteSession({
			connection: new Client(),
			stdin: "bash clock.sh 1 1 156789789",
			stdout: "156793449000\n",
		}),
	);
	defaultTest(
		convertInMsOnRemoteSession({
			connection: new Client(),
			stdin: "bash clock.sh 514 1 2",
			stdout: "1850462000\n",
		}),
	);

	// Test 4 - Check if an ip is valid by starting a script
	defaultTest(
		verifyIfIpIsValidOnRemoteSession({
			connection: new Client(),
			stdin: "bash checkip.sh 0.0.0.0",
			stdout: "true\n",
		}),
	);
	defaultTest(
		verifyIfIpIsValidOnRemoteSession({
			connection: new Client(),
			stdin: "bash checkip.sh 255.255.255.255",
			stdout: "true\n",
		}),
	);
	defaultTest(
		verifyIfIpIsValidOnRemoteSession({
			connection: new Client(),
			stdin: "bash checkip.sh 256.256.256.256",
			stdout: "false\n",
		}),
	);
	defaultTest(
		verifyIfIpIsValidOnRemoteSession({
			connection: new Client(),
			stdin: "bash checkip.sh 1.2.4",
			stdout: "false\n",
		}),
	);
	defaultTest(
		verifyIfIpIsValidOnRemoteSession({
			connection: new Client(),
			stdin: "bash checkip.sh 0.0.0.0.0",
			stdout: "false\n",
		}),
	);

	// Test 5 - Find the smallest number by moving one number,
	// it should return the final number &
	// the source position and the target position of the moved number
	defaultTest(
		findSmallestNumberOnRemoteSession({
			connection: new Client(),
			stdin: "bash smallest.sh 261235",
			stdout: "126235 2 0\n",
		}),
	);
	defaultTest(
		findSmallestNumberOnRemoteSession({
			connection: new Client(),
			stdin: "bash smallest.sh 209917",
			stdout: "29917 0 1\n",
		}),
	);
	defaultTest(
		findSmallestNumberOnRemoteSession({
			connection: new Client(),
			stdin: "bash smallest.sh 285365",
			stdout: "238565 3 1\n",
		}),
	);
});
