export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const SELECT_CAR = "SELECT_CAR";

export const removeFeature = item => {
	return {
		type: REMOVE_FEATURE,
		payload: item
	};
};

export const addFeature = item => {
	return {
		type: ADD_FEATURE,
		payload: item
	};
};

export const selectCar = car => {
	return {
		type: SELECT_CAR,
		payload: car
	};
};
