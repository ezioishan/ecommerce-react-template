import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Login = () => {
	return (
		<div>
			<Form className="ml-2 mt-5 w-100">
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
				<Form.Group className="mt-5" controlId="formBasicCheckbox">
					<Form.Text className="text-muted">
						Want to stay signed in longer than usual
					</Form.Text>
					<Form.Check type="checkbox" label="Remember Me" />
				</Form.Group>
				<Button
					className="input_button"
					variant="primary"
					type="submit"
				>
					LOGIN
				</Button>
			</Form>
		</div>
	);
};

export default Login;
