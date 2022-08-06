import React from "react";
import ReactLogo from "../images/react.png";
import cssLogo from "../images/css.png";
import expressLogo from "../images/express.png";
import htmlLogo from "../images/html.png";
import typescriptLogo from "../images/typescript.png";
import javaLogo from "../images/jenkins.png";
import firebaseLogo from "../images/aws.png";
import mongodbLogo from "../images/mongodb.png";
import javascriptLogo from "../images/javascript.png";
import nodeLogo from "../images/node-js.png";
import pythonLogo from "../images/webrtc.png";
import gitLogo from "../images/git.png";
import "./index.css";

const Skills = () => {
	const images = [
		htmlLogo,
		cssLogo,
		javascriptLogo,
		mongodbLogo,
		expressLogo,
		ReactLogo,
		nodeLogo,
		javaLogo,
		typescriptLogo,
		firebaseLogo,
		pythonLogo,
		gitLogo,
	];

	const logoImage = "logo-image";

	return (
		<div id="skills">
			<h1>Skills And Technologies</h1>
			<div className="heart"></div>
			<div className="skills-container">
				{images.map((img, index) => {
					return (
						<div className={logoImage + " image-" + (index + 1)} key={index}>
							<img src={img} alt="" className="skill-image" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;