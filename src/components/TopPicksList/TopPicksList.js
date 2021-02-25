import React from "react";
import "./TopPicksList.css";
import TopPicksListItem from "./TopPicksListItem";
import Carousel from "react-bootstrap/Carousel";

const TopPicksList = () => {
	return (
		<div className="carousel_container">
			<h2 className="carousel_title">Top Picks</h2>
			<Carousel className="w-100">
				<Carousel.Item interval={10000}>
					<div className="carousel_body_container">
						<TopPicksListItem />
						<TopPicksListItem />
						<TopPicksListItem />
					</div>
				</Carousel.Item>
				<Carousel.Item interval={10000}>
					<div className="carousel_body_container">
						<TopPicksListItem />
						<TopPicksListItem />
						<TopPicksListItem />
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default TopPicksList;
