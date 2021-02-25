import { productData } from "./Data/ProductsData";
export const initialState = {
	cart: [],
	filteredProducts: [],
	inputValue: "",
};

export const getCartTotal = (cart) => {
	let amount = 0.0;
	cart.map((item) => (amount += item.price));
	return amount;
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		case "REMOVE_FROM_CART": {
			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.id
			);
			let newCart = [...state.cart];

			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id : ${action.id}) from cart!`
				);
			}
			return {
				...state,
				cart: newCart,
			};
		}
		case "SET_SEARCH_INPUT": {
			return {
				...state,
				inputValue: action.item,
				// filteredProducts: productData.filter((product) =>
				// 	product.title
				// 		.toLowerCase()
				// 		.includes(state.inputValue.toLowerCase())
				// ),
			};
		}

		default:
			return state;
	}
};

export default reducer;
