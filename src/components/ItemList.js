import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

function ItemList(props) {
	return (
		<>
			<hr/>
			{props.itemList.filter(item => item.category.includes('SHIRT')).map((item) =>
				<Item
					whenItemClicked = { props.onItemSelection }
					whenCategoryClicked = {props.onFilterByCategory}
					category = {item.category}
					name = {item.name}
					description = {item.description}
					quantity = {item.quantity}
					id={item.id}
					key = {item.id} />
					)}
		</>
	);
}


// import React from 'react';

// const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

// function App() {
//   return (
//     <div>
//       {names.filter(name => name.includes('J')).map(filteredName => (
//         <li>
//           {filteredName}
//         </li>
//       ))}
//     </div>
//   );
// }

// export default App;


ItemList.propTypes = {
  itemList: PropTypes.array,
	onItemSelection: PropTypes.func,
	onFilterByCategory: PropTypes.func
};

export default ItemList;