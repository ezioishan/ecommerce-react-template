import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../StateProvider";
import "./Navbar.css";

function Navbar() {
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
		<div className="navbar_wrapper">
			<div className="navbar_brand">
				<Link to="/" style={{ textDecoration: "none", color: "white" }}>
					<h2>MyStore</h2>
				</Link>
			</div>
			<div className="navbar_searchbar">
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
			</div>
			<div className="navbar_loginLink">
				<Link
					to="/login-register"
					style={{ textDecoration: "none", color: "white" }}
				>
					<p>Login/Register</p>
				</Link>
			</div>
			<div className="navbar_checkoutLink">
				<Link
					to="checkout"
					style={{ textDecoration: "none", color: "white" }}
				>
					<ShoppingCartIcon />
					{cart?.length}
				</Link>
			</div>
		</div>
	);
}
export default Navbar;
