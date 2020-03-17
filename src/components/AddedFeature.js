import React from "react";

const AddedFeature = ({ feature, removeFeature }) => {
	return (
		<li>
			<button className="button" onClick={() => removeFeature(feature)}>
				X
			</button>
			{feature.name}
		</li>
	);
};

export default AddedFeature;
