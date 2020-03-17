import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import { carReducer } from "./reducers/carReducer";

import PickCar from "./components/PickCar";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const store = createStore(carReducer);

const App = ({ car, additionalFeatures, additionalPrice }) => {
	return (
		<Provider store={store}>
			<Route path="/customize">
				<div className="boxes">
					<div className="box">
						<Header car={car} />
						<AddedFeatures car={car} />
					</div>
					<div className="box">
						<AdditionalFeatures additionalFeatures={additionalFeatures} />
						<Total car={car} additionalPrice={additionalPrice} />
					</div>
				</div>
			</Route>
			<Route exact path="/">
				<PickCar />
			</Route>
		</Provider>
	);
};

export default App;
