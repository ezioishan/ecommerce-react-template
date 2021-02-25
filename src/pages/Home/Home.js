import React from "react";
import "./Home.css";

//importing components
import ProductsList from "../../components/ProductsList/ProductsList";
import TopPicksList from "../../components/TopPicksList/TopPicksList";

function Home() {
	return (
		<div className="home">
			<TopPicksList />
			<ProductsList />
		</div>
	);
}

export default Home;
