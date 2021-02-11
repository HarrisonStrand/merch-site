import React from "react";
import Shirt from "./Shirt";
import PropTypes from 'prop-types';

function ShirtList(props) {
	return (
		<>
			<hr/>
			{props.shirtList.map((shirt) =>
				<Shirt
					whenShirtClicked = { props.onShirtSelection } 
					name = {shirt.name}
					description = {shirt.description}
					quantity = {shirt.quantity}
					description = {shirt.description}
					id={shirt.id}
					key = {shirt.id} />
					)}
		</>
	);
}


ShirtList.propTypes = {
  shirtList: PropTypes.array,
	onShirtSelection: PropTypes.func
};

export default ShirtList;