import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class ItemControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			masterItemList: [],
			selectedItem: null,
			editing: false
		};
	}

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({ masterItemList: newMasterItemList, formVisibleOnPage: false });
  }

	handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

	handleDeletingItem = (id) => {
		const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
		this.setState({
			masterItemList: newMasterItemList,
			selectedItem: null
		});
	}

	handleEditClick = () => {
		this.setState({editing: true});
	}

	handleEditingItemInList = (itemToEdit) => {
		const editedMasterItemList = this.state.masterItemList
			.filter(item => item.id !== this.state.selectedItem.id)
			.concat(itemToEdit);
		this.setState({
				masterItemList: editedMasterItemList,
				editing: false,
				selectedItem: null
			});
	}

	handlePurchasingItemInList = () => {
		const selectedItem = this.state.selectedItem; // selects Item that is currently selected and viewed in the details page
		const newQuantity = Object.assign({}, selectedItem, {quantity: selectedItem.quantity - 1}); // targets the selectedItem and its quantity, and assigns it the new quantity
		const newItemList = this.state.masterItemList
			.filter(item => item.id !== this.state.selectedItem.id)
			.concat(newQuantity); // updates the Item list
		this.setState({ 
				masterItemList: newItemList,
				selectedItem: newQuantity
		});
}

// handleFilterByCategory = (category) => {
// 	const newMasterItemList = this.state.masterItemList.filter(item => item.category !== category);
// 	this.setState({
// 		masterItemList: newMasterItemList,
// 		selectedItem: null
// 	});
// }

	handleClick = () => {
			if (this.state.selectedItem != null) {
				this.setState({
					formVisibleOnPage: false,
					selectedItem: null,
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
			<EditItemForm 
			item = {this.state.selectedItem}
			onEditItem = {this.handleEditingItemInList}/>
			buttonText = "Return to Item List";
		} else if (this.state.selectedItem != null) {
			currentlyVisibleState = 
			<ItemDetail
				item = {this.state.selectedItem} 
				onClickingDelete = {this.handleDeletingItem}
				onClickingEdit = {this.handleEditClick} 
				onClickingPurchase = {this.handlePurchasingItemInList}/>
				buttonText = "Return to Item List";
		} else if (this.state.formVisibleOnPage) {
				currentlyVisibleState = <NewItemForm 
				onNewItemCreation = {this.handleAddingNewItemToList}
				onEditItem = {this.handleEditingItemInList}/>
				buttonText = "Return to Item List";
    } else {
				currentlyVisibleState = <ItemList 
				itemList = {this.state.masterItemList} 
				// onFilterByCategory = {this.handleFilterByCategory}
				onItemSelection={this.handleChangingSelectedItem}/>;
				buttonText = "Add Item";
    }
		return (
			<>
			{currentlyVisibleState}
			<button onClick={this.handleClick}>{buttonText}</button>
			</>
		)
	}
}

export default ItemControl;