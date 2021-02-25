import React from "react";
import "./Header.css";
import { useStateValue } from "../../StateProvider";

import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
	const [{ cart }] = useStateValue();
	const [{ inputValue }, dispatch] = useStateValue();

	function handleChange(event) {
		console.log("onChange here!!!");
		dispatch({
			type: "SET_SEARCH_INPUT",
			item: event.target.value,
		});
		console.log(inputValue);
	}
	return (
		<Navbar bg="none" variant="dark" className="navbar_container">
			<LinkContainer to="/">
				<Navbar.Brand>MyStore</Navbar.Brand>
			</LinkContainer>

			<Form inline className="mr-auto">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">
							Search
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						aria-label="search_bar"
						aria-describedby="basic-addon1"
						value={inputValue}
						onChange={handleChange}
					/>
				</InputGroup>
			</Form>
			<Nav className="ml-auto">
				<LinkContainer to="/login-register">
					<Nav.Link>Login/Register</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/checkout">
					<Nav.Link>
						<ShoppingCartIcon />
						{cart?.length}
					</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar>
	);
}

export default Header;
