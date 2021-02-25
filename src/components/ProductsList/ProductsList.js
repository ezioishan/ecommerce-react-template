import React from "react";
import { ProductContext } from "../../ProductContext";
import { useStateValue } from "../../StateProvider";
import ProductsListItem from "./ProductsListItem";
import "./ProductsList.css";

function ProductsList() {
	const [products, setProducts] = React.useContext(ProductContext);
	const [{ inputValue }, dispatch] = useStateValue();
	let prodsViews;
	if (inputValue === "") prodsViews = products;
	else
		prodsViews = products.filter((product) =>
			product.title.toLowerCase().includes(inputValue.toLowerCase())
		);
	return (
		<div className="container_productList">
			{prodsViews.length === 0 ? (
				<div className="productList_notfound">
					<h1>No Products found!!!</h1>
				</div>
			) : (
				prodsViews.map((product, index) => {
					return (
						<>
							<ProductsListItem
								title={product.title}
								id={product.id}
								description={product.description}
								price={product.price}
							/>
						</>
					);
				})
			)}
		</div>
	);
}

export default ProductsList;
