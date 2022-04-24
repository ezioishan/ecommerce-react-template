import React from "react";
import { ProductContext } from "../../ProductContext";
import { useStateValue } from "../../StateProvider";
import ProductsListItem from "./ProductsListItem";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

import "./ProductsList.css";

function ProductsList() {
	const [products, setProducts] = React.useContext(ProductContext);
	const [{ inputValue }, dispatch] = useStateValue();
	const [activePage, setActivePage] = React.useState(1);
	const [productsPerPage, setProductsPerPage] = React.useState(10);

	let prodsViews;
	if (inputValue === "") prodsViews = products;
	else
		prodsViews = products.filter((product) =>
			product.title.toLowerCase().includes(inputValue.toLowerCase())
		);

	const indexOfLastProd = activePage * productsPerPage;
	const indexOfFirstProd = indexOfLastProd - productsPerPage;
	const activeProducts = prodsViews.slice(indexOfFirstProd, indexOfLastProd);

	const renderProducts = activeProducts.map((product, index) => {
		return (
			<>
				{activeProducts.length === 0 ? (
					<div className="productList_notfound">
						<h1>No Products found!!!</h1>
					</div>
				) : (
					<ProductsListItem
						title={product.title}
						id={product.id}
						description={product.description}
						price={product.price}
					/>
				)}
			</>
		);
	});

	const pageNumbers = [];
	for (
		let number = 1;
		number <= Math.ceil(prodsViews.length / productsPerPage);
		number++
	) {
		pageNumbers.push(
			<Pagination.Item
				key={number}
				active={number === activePage}
				onClick={(e) => handleChangePage(e)}
			>
				{number}
			</Pagination.Item>
		);
	}

	const handleChangePage = (e) => {
		console.log("e.target: ", e.target.innerHTML);
		setActivePage(Number(e.target.innerHTML));
	};
	return (
		<>
			<div className="container_productList">{renderProducts}</div>
			<div className="container_pageNumbers">
				<Pagination>{pageNumbers}</Pagination>
			</div>
		</>
	);
}

export default ProductsList;
