import React from "react";
import { Link } from "react-router-dom";

const CarSelect = ({ car, selectCar }) => {
	return (
		<div className="car-select">
			<figure className="image">
				<img src={car.image} alt={car.name} />
			</figure>
			<h2>{car.name}</h2>
			<p>Amount: ${car.price}</p>
			<Link to="/customize">
				<button className="button" onClick={() => selectCar(car)}>
					Select
				</button>
			</Link>
		</div>
	);
};

export default CarSelect;
