import React from "react";
import { useStateValue } from "../../StateProvider";

import "./ProductsListItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductsListItem({ id, title, description, price }) {
	const [{ cart }, dispatch] = useStateValue();

	function handleClick() {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				description: description,
				price: price,
			},
		});
	}
	return (
		<Card bg="none" text="white" className="mt-2 card_container" key={id}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>{"$" + price}</Card.Text>
				<Button
					className="mt-5 card_button"
					variant="primary"
					onClick={handleClick}
				>
					ADD TO CART
				</Button>
			</Card.Body>
		</Card>
	);
}
export default ProductsListItem;
