import React from "react";
import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";
import { removeFeature } from "../actions/featureActions";

const AddedFeatures = ({ car, removeFeature }) => {
	return (
		<div className="content">
			<h6>Added features:</h6>
			{car.features.length ? (
				<ol type="1">
					{car.features.map(item => (
						<AddedFeature
							key={item.id}
							feature={item}
							removeFeature={removeFeature}
						/>
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		car: state.car
	};
};

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
