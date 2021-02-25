import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";

function Subtotal() {
	const [{ cart }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart.length} Items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox"></input>
							Add as Gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button className="proceed_button">Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
