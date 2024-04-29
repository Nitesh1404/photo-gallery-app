import React from "react";

const GridItem = ({ photo, id }) => {
	return (
		<div className="card">
			<img
				src={`http://localhost:5000/uploads/${photo}`}
				className="card-img-top img-fluid"
				alt={`grid_image_${id}`}
			/>
		</div>
	);
};

export default GridItem;
