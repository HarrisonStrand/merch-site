import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
		<>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <p>{props.name}</p>
      </div>
		</>
  );
}

Item.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;