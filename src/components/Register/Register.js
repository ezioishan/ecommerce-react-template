import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Register = () => {
	return (
		<div>
			<Form className="ml-2 mt-5 w-100">
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						className="login_input"
						type="text"
						placeholder="Enter name"
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						className="login_input"
						type="email"
						placeholder="Enter email"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						className="login_input"
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Button
					className="input_button"
					variant="primary"
					type="submit"
				>
					REGISTER
				</Button>
			</Form>
		</div>
	);
};

export default Register;
