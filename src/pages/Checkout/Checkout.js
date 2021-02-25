import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
//importing components
import Subtotal from "../../components/Subtotal/Subtotal";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";

function Checkout() {
	const [{ cart }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout_left">
				<div>
					<h2 className="checkout_title">Your Cart</h2>
					<ol>
						{cart.map((item, index) => {
							return (
								<li>
									<CheckoutItems
										title={item.title}
										id={item.id}
										price={item.price}
									/>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
			<div className="checkout_right">
				<h2>Subtotal</h2>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
