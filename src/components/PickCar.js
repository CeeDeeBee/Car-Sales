import React from "react";
import { connect } from "react-redux";

import { selectCar } from "../actions/featureActions";

import CarSelect from "./CarSelect";

const PickCar = ({ cars, selectCar }) => {
	return (
		<div className="pick-car box">
			<h1>Select Car</h1>
			{cars.map(car => (
				<CarSelect car={car} selectCar={selectCar} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cars: state.cars
	};
};

export default connect(mapStateToProps, { selectCar })(PickCar);
