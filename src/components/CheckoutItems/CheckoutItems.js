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
			<h3>{title}</h3>
			<p>
				<small>
					$<strong>{price}</strong>
				</small>
			</p>
			<button type="button" onClick={handleClick}>
				Remove from cart
			</button>
		</div>
	);
}
export default CheckoutItems;
