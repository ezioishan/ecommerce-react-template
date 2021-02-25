import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ProductProvider } from "./ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importing components
//import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

//importing pages
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

// console.log("Type of productData: " + typeof productData);
function App() {
	return (
		<ProductProvider>
			<div className="app">
				<BrowserRouter>
					<Switch>
						<Route path="/login-register">
							<LoginRegister />
						</Route>
						<Route path="/checkout">
							<Navbar />
							<Checkout />
						</Route>
						<Route path="/">
							<Navbar />
							<Home />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</ProductProvider>
	);
}

export default App;
