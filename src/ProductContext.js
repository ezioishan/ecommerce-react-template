import React from "react";
import { productData } from "./Data/ProductsData";

export const ProductContext = React.createContext();

export function ProductProvider(props) {
	const [products, setProducts] = React.useState(productData);
	return (
		<ProductContext.Provider value={[products, setProducts]}>
			{props.children}
		</ProductContext.Provider>
	);
}
