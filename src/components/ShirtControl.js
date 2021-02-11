import React from 'react';
import NewShirtForm from './NewShirtForm';
import ShirtList from './ShirtList';
import ShirtDetail from './ShirtDetail';
import EditShirtForm from './EditShirtForm';

class ShirtControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			masterShirtList: [],
			selectedShirt: null,
			editing: false
		};
	}

  handleAddingNewShirtToList = (newShirt) => {
    const newMasterShirtList = this.state.masterShirtList.concat(newShirt);
    this.setState({ masterShirtList: newMasterShirtList, formVisibleOnPage: false });
  }

	handleChangingSelectedShirt = (id) => {
    const selectedShirt = this.state.masterShirtList.filter(shirt => shirt.id === id)[0];
    this.setState({selectedShirt: selectedShirt});
  }

	handleDeletingShirt = (id) => {
		const newMasterShirtList = this.state.masterShirtList.filter(shirt => shirt.id !== id);
		this.setState({
			masterShirtList: newMasterShirtList,
			selectedShirt: null
		});
	}

	handleEditClick = () => {
		this.setState({editing: true});
	}

	handleEditingShirtInList = (shirtToEdit) => {
		const editedMasterShirtList = this.state.masterShirtList
			.filter(shirt => shirt.id !== this.state.selectedShirt.id)
			.concat(shirtToEdit);
		this.setState({
				masterShirtList: editedMasterShirtList,
				editing: false,
				selectedShirt: null
			});
	}

	// handlePurchasingShirtInList = () => {
	// 	const selectedShirt = this.state.masterShirtList
	// 		.filter(shirt => shirt.id === this.state.selectedShirt.id)[0];
	// 	const newQuantity = selectedShirt.quantity--;
	// 	this.setState({ 
	// 		selectedShirt: newQuantity
	// 	})
	// }

	handlePurchasingShirtInList = () => {
		const selectedShirt = this.state.selectedShirt; // selects shirt that is currently selected and viewed in the details page
		const newQuantity = Object.assign({}, selectedShirt, {quantity: selectedShirt.quantity - 1}); // targets the selectedShirt and its quantity, and assigns it the new quantity
		const newShirtList = this.state.masterShirtList
			.filter(shirt => shirt.id !== this.state.selectedShirt.id)
			.concat(newQuantity); // updates the shirt list
		this.setState({ 
				masterShirtList: newShirtList,
				selectedShirt: newQuantity
		});
}

	handleClick = () => {
			if (this.state.selectedShirt != null) {
				this.setState({
					formVisibleOnPage: false,
					selectedShirt: null,
					editing: false
				});
			} else {
					this.setState(prevState => ({
				formVisibleOnPage: !prevState.formVisibleOnPage
			}));
		}
	}

	render(){
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.editing ) {      
			currentlyVisibleState = 
			<EditShirtForm 
			shirt = {this.state.selectedShirt}
			onEditShirt = {this.handleEditingShirtInList}/>
			buttonText = "Return to Shirt List";
		} else if (this.state.selectedShirt != null) {
			currentlyVisibleState = 
			<ShirtDetail
				shirt = {this.state.selectedShirt} 
				onClickingDelete = {this.handleDeletingShirt}
				onClickingEdit = {this.handleEditClick} 
				onClickingPurchase = {this.handlePurchasingShirtInList}/>
				buttonText = "Return to Shirt List";
		} else if (this.state.formVisibleOnPage) {
				currentlyVisibleState = <NewShirtForm 
				onNewShirtCreation = {this.handleAddingNewShirtToList}
				onEditShirt = {this.handleEditingShirtInList}/>
				buttonText = "Return to Shirt List";
    } else {
				currentlyVisibleState = <ShirtList 
				shirtList = {this.state.masterShirtList} 
				onShirtSelection={this.handleChangingSelectedShirt}/>;
				buttonText = "Add Shirt";
    }
		return (
			<>
			{currentlyVisibleState}
			<button onClick={this.handleClick}>{buttonText}</button>
			</>
		)
	}
}

export default ShirtControl;