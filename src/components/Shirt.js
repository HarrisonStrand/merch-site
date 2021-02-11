import React from "react";
import PropTypes from "prop-types";

function Shirt(props){
  return (
		<>
      <div onClick = {() => props.whenShirtClicked(props.id)}>
      <p>{props.name}</p>
      </div>
		</>
  );
}

Shirt.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenShirtClicked: PropTypes.func
};

export default Shirt;