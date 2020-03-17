import React from "react";

const AdditionalFeature = ({ feature, addFeature }) => {
	return (
		<li>
			<button
				className="button"
				onClick={() => {
					addFeature(feature);
				}}
			>
				Add
			</button>
			{feature.name} (+{feature.price})
		</li>
	);
};

export default AdditionalFeature;
