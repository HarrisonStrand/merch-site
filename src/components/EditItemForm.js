import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditItemForm (props) {
	const {item} = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({category: event.target.category.value, name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: item.id});
		console.log(event.target.category.value);
		console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
	}

  return (
    <React.Fragment>
      <ReusableForm
				formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
	item: PropTypes.object,
	onEditItem: PropTypes.func
};

export default EditItemForm;