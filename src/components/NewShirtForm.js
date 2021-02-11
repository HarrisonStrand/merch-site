import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewShirtForm(props){
  
	function handleNewShirtFormSubmission(event) {
    event.preventDefault();
    props.onNewShirtCreation({name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: v4()});
    console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
  }
	
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewShirtFormSubmission}
        buttonText='Add Shirt'/>
    </React.Fragment>
  );
}

NewShirtForm.propTypes = {
  onNewShirtCreation: PropTypes.func
};

export default NewShirtForm;