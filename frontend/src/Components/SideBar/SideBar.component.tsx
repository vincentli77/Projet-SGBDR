import React from "react";
import Logo from "../../imgs/logo.png";
import { Challenge } from "../../interfaces/challenge.interface";
import { ButtonAddChallenge } from "../buttons/ButtonAddChallenge.component";
import { Menu } from "./Menu.component";
import "./SideBar.scss";

interface Props {
	challenges: Challenge[];
}

export const SideBar = (props: Props): JSX.Element => {
	return (
		<div className="sidebar">
			<div className="logo">
				<img className="logo2" src={Logo} alt="logo" />
				<span>
					Ch<span>a</span>llenges
				</span>
			</div>
			<Menu menuType={"challenges"} list={props.challenges} />
			<ButtonAddChallenge />
		</div>
	);
};
