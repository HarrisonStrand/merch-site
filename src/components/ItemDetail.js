import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
	const { item, onClickingDelete, onClickingPurchase } = props;
  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <hr/>
			<p>{item.category}</p>
			<p>{item.name}</p>
			<p>{item.description}</p>
			<p>{item.quantity}</p>
			<button onClick={()=> onClickingPurchase() }>Purchase</button>
			<button onClick={ props.onClickingEdit }>Update Item</button>
			<button onClick={()=> onClickingDelete(item.id) }>Delete</button> 
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingPurchase: PropTypes.func
};

export default ItemDetail;