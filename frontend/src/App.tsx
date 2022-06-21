import { Tab } from "./Components/Tab.component";
import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="AppGlass">
				<div></div>
				<Tab studentName="laura" email="lol" score={20} />
			</div>
		</div>
	);
}

export default App;
