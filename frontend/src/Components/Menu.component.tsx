import React, { useState } from "react";

import { MdOutlineDashboard } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

import { Challenge } from "../interfaces/challenge.interface";
import { Question } from "../interfaces/question.interface";

interface Props {
	menuType: "challenges" | "tests";
	list: Challenge[] | Question[];
}

export const Menu = (props: Props): JSX.Element => {
	const [selected, setSelected] = useState(-1);

	return (
		<div>
			<div className="menu">
				<div className={`${selected === -1 ? "menuItem active" : "menuItem"}`} onClick={() => setSelected(-1)}>
					{props.menuType === "tests" ? (
						<div>
							<BsBookmark />
							Test
						</div>
					) : (
						<div>
							<MdOutlineDashboard /> Dashboard
						</div>
					)}
				</div>
				{props.list.length > 0 &&
					props.list.map((element: Challenge | Question, index: number) => (
						<div key={element.id}>
							<div className={`${index === selected ? "menuItem active" : "menuItem"}`} onClick={() => setSelected(index)} key={element.id}>
								<div>
									{props.menuType === "challenges" ? (
										<div>
											<MdOutlineDashboard />
										</div>
									) : (
										<div>
											<BsBookmark />
										</div>
									)}
								</div>
								<span>{element.name}</span>
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
