import React from "react";
import PropTypes from "prop-types";

function ShirtDetail(props){
	const { shirt, onClickingDelete, onClickingPurchase } = props;
  return (
    <React.Fragment>
      <h1>Shirt Detail</h1>
      <hr/>
			<p>{shirt.name}</p>
			<p>{shirt.description}</p>
			<p>{shirt.quantity}</p>
			<button onClick={()=> onClickingPurchase() }>Purchase</button>
			<button onClick={ props.onClickingEdit }>Update Shirt</button>
			<button onClick={()=> onClickingDelete(shirt.id) }>Delete</button> 
    </React.Fragment>
  );
}

ShirtDetail.propTypes = {
  shirt: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingPurchase: PropTypes.func
};

export default ShirtDetail;