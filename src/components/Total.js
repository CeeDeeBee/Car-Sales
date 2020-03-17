import React from "react";
import { connect } from "react-redux";

const Total = ({ selectedCar, additionalPrice }) => {
	return (
		<div className="content">
			<h4>Total Amount: ${selectedCar.price + additionalPrice}</h4>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		selectedCar: state.selectedCar,
		additionalPrice: state.additionalPrice
	};
};

export default connect(mapStateToProps, {})(Total);
