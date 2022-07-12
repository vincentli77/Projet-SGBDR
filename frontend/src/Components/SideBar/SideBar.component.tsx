import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import { Challenge } from "../../interfaces/challenge.interface";
import { Menu } from "./Menu.component";
import "./SideBar.scss";

interface Props {
	challenges: Challenge[];
}

export const SideBar = (props: Props): JSX.Element => {
	const [selected, setSelected] = useState(-1);

	return (
		<div className="sidebar">
			<div className="logo">
				<img className="logo2" src={Logo} alt="logo" />
				<span>
					Ch<span>a</span>llenges
				</span>
			</div>
			<Menu menuType={"challenges"} list={props.challenges} />
		</div>
	);
};
