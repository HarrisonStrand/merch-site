import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditShirtForm (props) {
	const {shirt} = props;

  function handleEditShirtFormSubmission(event) {
    event.preventDefault();
    props.onEditShirt({name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: shirt.id});
		console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
	}

  return (
    <React.Fragment>
      <ReusableForm
				formSubmissionHandler={handleEditShirtFormSubmission}
        buttonText="Update Shirt" />
    </React.Fragment>
  );
}

EditShirtForm.propTypes = {
	shirt: PropTypes.object,
	onEditShirt: PropTypes.func
};

export default EditShirtForm;