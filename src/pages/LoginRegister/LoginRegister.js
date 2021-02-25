import React from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import { LinkContainer } from "react-router-bootstrap";

const LoginRegister = () => {
	const [toggleClass, setToggleClass] = React.useState(true);
	const handleClick = () => {
		setToggleClass(!toggleClass);
	};
	return (
		<div className="login_register_container">
			<LinkContainer
				className="login_register_title"
				to="/"
				style={{ fontSize: "32px", color: "white" }}
			>
				<Nav.Link>MyStore</Nav.Link>
			</LinkContainer>
			<div className="login_register_wrapper">
				<div className="login_register_tab">
					<Button
						variant="link"
						className={`login_register_button ${
							toggleClass ? "activeButton" : ""
						}`}
						onClick={handleClick}
						style={{ textDecoration: "none" }}
					>
						LOGIN
					</Button>
					<Button
						variant="link"
						className={`login_register_button ${
							toggleClass ? "" : "activeButton"
						}`}
						onClick={handleClick}
						style={{ textDecoration: "none" }}
					>
						REGISTER
					</Button>
				</div>
				<div className="login_register">
					<div
						className={`login ${
							toggleClass ? "" : "notActiveComp"
						}`}
					>
						<Login />
					</div>
					<div
						className={`register ${
							toggleClass ? "notActiveComp" : ""
						}`}
					>
						<Register />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginRegister;
