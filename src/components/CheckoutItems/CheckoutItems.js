import React from "react";
import { useStateValue } from "../../StateProvider";

import "./CheckoutItems.css";

function CheckoutItems({ id, title, price }) {
	const [{ cart }, dispatch] = useStateValue();
	const handleClick = () => {
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	};
	return (
		<div className="checkout_item" key={id}>
			<div className="checkout_item_left">
				<h3>{title}</h3>
				<p>Price : ${price}</p>
			</div>

			<div className="checkout_item_right">
				<button
					className="remove_cart_button"
					type="button"
					onClick={handleClick}
				>
					Remove
				</button>
			</div>
		</div>
	);
}
export default CheckoutItems;
