import React, { useState } from "react";
import Logo from "../imgs/logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { Challenge } from "../interfaces/challenge.interface";

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

			<div className="menu">
				<div className={`${selected === -1 ? "menuItem active" : "menuItem"}`} onClick={() => setSelected(-1)}>
					<MdOutlineDashboard /> Dashboard
				</div>
				{props.challenges.length > 0 &&
					props.challenges.map((challenge, index) => (
						<div key={challenge.id}>
							<div className={`${index === selected ? "menuItem active" : "menuItem"}`} onClick={() => setSelected(index)} key={challenge.id}>
								<div>
									<MdOutlineDashboard />
								</div>
								<span>{challenge.name}</span>
							</div>
						</div>
					))}
			</div>
			<div className="menuItem">
				<FaSignOutAlt />
			</div>
		</div>
	);
};
