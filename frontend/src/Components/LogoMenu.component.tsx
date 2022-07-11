import React from "react";
import Logo from "../imgs/logo.png";

interface Props {
	type: "challenges" | "tests";
}

export const LogoMenu = (props: Props): JSX.Element => {
	return (
		<div className="logo">
			<img className="logo2" src={Logo} alt="logo" />
			<span>
				{props.type === "challenges" ? (
					<div>
						ch<span>a</span>llenges
					</div>
				) : (
					<div>
						t<span>e</span>sts
					</div>
				)}
			</span>
		</div>
	);
};
