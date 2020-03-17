import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ selectedCar }) => {
	return (
		<>
			<figure className="image is-128x128">
				<img src={selectedCar.image} alt={selectedCar.name} />
			</figure>
			<h2>{selectedCar.name}</h2>
			<p>Amount: ${selectedCar.price}</p>
			<Link to="/">
				<button className="button">Change Car</button>
			</Link>
		</>
	);
};

const mapStateToProps = state => {
	return {
		selectedCar: state.selectedCar
	};
};

export default connect(mapStateToProps, {})(Header);
