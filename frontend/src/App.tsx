import React from "react";
import "./App.css";
import { Header } from "./Components/Header.component";
import { Row } from "./Components/Row.component";

function App() {
	return (
		<div className="App">
			App
			<Header studentName="Name" email="email" score="score" />
			<Row studentName="laura" email="lol" score={0} />
		</div>
	);
}

export default App;
