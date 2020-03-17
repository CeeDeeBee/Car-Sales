import {
	ADD_FEATURE,
	REMOVE_FEATURE,
	SELECT_CAR
} from "../actions/featureActions";

const initialState = {
	additionalPrice: 0,
	cars: [
		{
			price: 26395,
			name: "2019 Ford Mustang",
			image:
				"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
			features: [],
			additionalFeatures: [
				{ id: 1, name: "V-6 engine", price: 1500 },
				{ id: 2, name: "Racing detail package", price: 1500 },
				{ id: 3, name: "Premium sound system", price: 500 },
				{ id: 4, name: "Rear spoiler", price: 250 }
			]
		},
		{
			price: 74790,
			name: "Tesla Model S",
			image:
				"https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg",
			features: [],
			additionalFeatures: [
				{ id: 1, name: "Performance Model", price: 20000 },
				{ id: 2, name: "Sonic Carbon Slipstream Wheels", price: 1500 },
				{ id: 3, name: "Cream Interior", price: 1500 },
				{ id: 4, name: "Full Self-Driving", price: 7000 }
			]
		},
		{
			price: 39900,
			name: "Tesla Cybertruck",
			image:
				"https://cdn.cnn.com/cnnnext/dam/assets/191121212606-tesla-cybertruck-exlarge-169.jpg",
			features: [],
			additionalFeatures: [
				{ id: 1, name: "Dual Motor AWD", price: 10000 },
				{ id: 2, name: "Full Self-Driving", price: 7000 }
			]
		}
	],
	selectedCar: {
		price: 26395,
		name: "2019 Ford Mustang",
		image:
			"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
		features: [],
		additionalFeatures: [
			{ id: 1, name: "V-6 engine", price: 1500 },
			{ id: 2, name: "Racing detail package", price: 1500 },
			{ id: 3, name: "Premium sound system", price: 500 },
			{ id: 4, name: "Rear spoiler", price: 250 }
		]
	}
};

export const carReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FEATURE:
			return {
				...state,
				additionalPrice: state.additionalPrice + action.payload.price,
				selectedCar: {
					...state.selectedCar,
					features: [...state.selectedCar.features, action.payload],
					additionalFeatures: state.selectedCar.additionalFeatures.filter(
						feature => feature.id !== action.payload.id
					)
				}
			};
		case REMOVE_FEATURE:
			return {
				...state,
				additionalPrice: state.additionalPrice - action.payload.price,
				selectedCar: {
					...state.selectedCar,
					features: state.selectedCar.features.filter(
						feature => feature.id !== action.payload.id
					),
					additionalFeatures: [
						...state.selectedCar.additionalFeatures,
						action.payload
					]
				}
			};
		case SELECT_CAR:
			return {
				...state,
				additionalPrice: 0,
				selectedCar: action.payload
			};
		default:
			return state;
	}
};
