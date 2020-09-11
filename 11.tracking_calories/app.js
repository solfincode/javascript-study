/**********************
storage Controller
***********************/
const StorageCtrl = (function () {
	return {
		storeItem: function (item) {
			let items = [];
			//check if any items in local storage
			if (localStorage.getItem("items") === null) {
				items = [];
				items.push(item);
				localStorage.setItem("items", JSON.stringify(items));
			} else {
				items = JSON.parse(localStorage.getItem("items"));
				items.push(item);
				localStorage.setItem("items", JSON.stringify(items));
			}
		},
		getItemsFromStorage: function () {
			if (localStorage.getItem("items") === null) {
				items = [];
			} else {
				items = JSON.parse(localStorage.getItem("items"));
			}
			return items;
		},
		updateItemStorage: function (updatedItem) {
			let items = JSON.parse(localStorage.getItem("items"));
			items.forEach(function (item, index) {
				if (updatedItem.id == item.id) {
					items.splice(index, 1, updatedItem);
				}
			});
			localStorage.setItem("items", JSON.stringify(items));
		},
		deleteItemFromStorage: function (id) {
			let items = JSON.parse(localStorage.getItem("items"));
			items.forEach(function (item, index) {
				if (id == item.id) {
					items.splice(index, 1);
				}
			});
			localStorage.setItem("items", JSON.stringify(items));
		},
		clearItemsFromStorage: function () {
			localStorage.removeItem("items");
		},
	};
})();
/**********************
 item Controller
 ***********************/
const ItemCtrl = (function () {
	const Item = function (id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	};

	//data structure
	const data = {
		// items: [
		// 	{ id: 0, name: "Steak Dinner", calories: 1200 },
		// 	{ id: 1, name: "cookie", calories: 3200 },
		// 	{ id: 2, name: "burger", calories: 5200 },
		// ],
		items: StorageCtrl.getItemsFromStorage(),
		currentItem: null,
		totalCalories: 0,
	};
	return {
		getItems: function () {
			return data.items;
		},
		addItem: function (name, calories) {
			//create id
			let ID;
			if (data.items.length > 0) {
				ID = data.items[data.items.length - 1].id + 1;
			} else {
				ID = 0;
			}
			//calories to number
			calories = parseInt(calories);
			//creating new item
			newItem = new Item(ID, name, calories);
			// add to items array
			data.items.push(newItem);
			return newItem;
		},
		getItemById: function (id) {
			let found = null;
			data.items.forEach(function (item) {
				if (item.id === id) {
					found = item;
				}
			});
			return found;
		},
		updateListItem: function (name, calories) {
			calories = parseInt(calories);
			let found = null;
			data.items.forEach(function (item) {
				if (item.id === data.currentItem.id) {
					item.name = name;
					item.calories = calories;
					found = item;
				}
			});
			return found;
		},
		deleteItem: function (id) {
			//get ids
			const ids = data.items.map(function (item) {
				return item.id;
			});
			//get index
			const index = ids.indexOf(id);
			//remove item
			data.items.splice(index, 1);
		},
		clearAllItems: function () {
			data.items = [];
		},
		setCurrentItem: function (item) {
			data.currentItem = item;
		},
		getCurrentItem: function () {
			return data.currentItem;
		},
		getTotalCalories: function () {
			let total = 0;
			data.items.forEach(function (item) {
				total += item.calories;
			});
			data.totalCalories = total;
			return data.totalCalories;
		},
		logData: function () {
			return data;
		},
	};
})();
/**********************
 UIController
 ***********************/
const UICtrl = (function () {
	const UISelectors = {
		itemList: "#item-list",
		addBtn: "#addBtn",
		updateBtn: "#update-btn",
		deleteBtn: "#delete-btn",
		backBtn: "#back-btn",
		itemNameInput: "#item-name",
		itemCaloriesInput: "#item-calories",
		totalCalories: ".total-calories",
		listItems: "#item-list li",
		clearBtn: "#clear-btn",
	};
	return {
		populateItemList: function (items) {
			let html = "";
			items.forEach(function (item) {
				html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong><em>${item.calories} calories</em>
                <a href="#" class="secondary-content">delete</a>
            </li>`;
			});
			document.querySelector(UISelectors.itemList).innerHTML = html;
		},
		getItemInput: function () {
			return {
				name: document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value,
			};
		},
		addListItem: function (item) {
			document.querySelector(UISelectors.itemList).style.display = "block";
			//create li element
			const li = document.createElement("li");
			li.className = "collection-item";
			li.id = `item-${item.id}`;
			li.innerHTML = `<strong>${item.name}:</strong><em>${item.calories} calories</em>
            <a href="#" class="secondary-content">edit</a>`;
			document
				.querySelector(UISelectors.itemList)
				.insertAdjacentElement("beforeend", li);
		},
		updateListItem: function (item) {
			let listItems = document.querySelectorAll(UISelectors.listItems);
			// node list in to array
			listItems = Array.from(listItems);
			listItems.forEach(function (listItem) {
				const itemID = listItem.getAttribute("id");
				if (itemID === `item-${item.id}`) {
					document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}:</strong><em>${item.calories} calories</em>
            <a href="#" class="secondary-content">edit</a>
                    `;
				}
			});
		},
		deleteListItem: function (id) {
			const itemID = `#item-${id}`;
			const item = document.querySelector(itemID);
			item.remove();
		},
		removeItems: function () {
			let listItems = document.querySelectorAll(UISelectors.listItems);
			listItems = Array.from(listItems);
			listItems.forEach(function (item) {
				item.remove();
			});
		},
		clearInput: function () {
			document.querySelector(UISelectors.itemNameInput).value = "";
			document.querySelector(UISelectors.itemCaloriesInput).value = "";
		},
		addItemToForm: function () {
			document.querySelector(
				UISelectors.itemNameInput
			).value = ItemCtrl.getCurrentItem().name;
			document.querySelector(
				UISelectors.itemCaloriesInput
			).value = ItemCtrl.getCurrentItem().calories;
			UICtrl.showEditState();
		},
		hideList: function () {
			document.querySelector(UISelectors.itemList).style.display = "none";
		},
		showTotalCalories: function (totalCalories) {
			document.querySelector(
				UISelectors.totalCalories
			).textContent = totalCalories;
		},

		clearEditState: function () {
			UICtrl.clearInput();
			document.querySelector(UISelectors.updateBtn).style.display = "none";
			document.querySelector(UISelectors.deleteBtn).style.display = "none";
			document.querySelector(UISelectors.backBtn).style.display = "none";
			document.querySelector(UISelectors.addBtn).style.display = "inline";
		},
		showEditState: function () {
			document.querySelector(UISelectors.updateBtn).style.display = "inline";
			document.querySelector(UISelectors.deleteBtn).style.display = "inline";
			document.querySelector(UISelectors.backBtn).style.display = "inline";
			document.querySelector(UISelectors.addBtn).style.display = "none";
		},
		getSelectors: function () {
			return UISelectors;
		},
	};
})();
/**********************
app Controller
 ***********************/
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
	//load event listener
	const loadEventListeners = function () {
		const UISelectors = UICtrl.getSelectors();
		//add item event
		document
			.querySelector(UISelectors.addBtn)
			.addEventListener("click", itemAddSubmit);
		document
			.querySelector(UISelectors.itemList)
			.addEventListener("click", itemEditClick);
		document
			.querySelector(UISelectors.updateBtn)
			.addEventListener("click", itemUpdateSubmit);

		document.addEventListener("keypress", function (e) {
			if (e.keyCode === 13 || e.which === 13) {
				e.preventDefault();
				return false;
			}
		});

		document
			.querySelector(UISelectors.backBtn)
			.addEventListener("click", itemUpdateSubmit);
		document
			.querySelector(UISelectors.deleteBtn)
			.addEventListener("click", itemDeleteSubmit);
		document
			.querySelector(UISelectors.clearBtn)
			.addEventListener("click", clearAllItemsClick);
	};

	const itemAddSubmit = function (e) {
		//get from input from ui ctrl
		const input = UICtrl.getItemInput();
		if (input.name !== "" && input.calories !== "") {
			const newItem = ItemCtrl.addItem(input.name, input.calories);
			UICtrl.addListItem(newItem);
			//get total calories
			const totalCalories = ItemCtrl.getTotalCalories();
			//add total calories to ui
			UICtrl.showTotalCalories(totalCalories);
			StorageCtrl.storeItem(newItem);
			//clear field
			UICtrl.clearInput();
		}
		e.preventDefault();
	};
	const itemEditClick = function (e) {
		if (e.target.classList.contains("secondary-content")) {
			const listId = e.target.parentNode.id;
			//break into array
			const listIdArray = listId.split("-");
			//get actual id
			const id = parseInt(listIdArray[1]);
			//get item
			const itemToEdit = ItemCtrl.getItemById(id);
			//set current item
			ItemCtrl.setCurrentItem(itemToEdit);
			UICtrl.addItemToForm();
		}
		e.preventDefault();
	};

	const itemUpdateSubmit = function (e) {
		// get item input
		const input = UICtrl.getItemInput();
		const updatedItem = ItemCtrl.updateListItem(input.name, input.calories);
		//update ui
		UICtrl.updateListItem(updatedItem);
		//get total calories
		const totalCalories = ItemCtrl.getTotalCalories();
		//add total calories to ui
		UICtrl.showTotalCalories(totalCalories);
		//update local storage
		StorageCtrl.updateItemStorage(updatedItem);
		UICtrl.clearEditState();
		e.preventDefault();
	};

	const itemDeleteSubmit = function (e) {
		//get current item
		const currentItem = ItemCtrl.getCurrentItem();
		//delete from data structure
		ItemCtrl.deleteItem(currentItem.id);
		// delete from ui
		UICtrl.deleteListItem(currentItem.id);
		const totalCalories = ItemCtrl.getTotalCalories();
		//add total calories to ui
		UICtrl.showTotalCalories(totalCalories);
		StorageCtrl.deleteItemFromStorage(currentItem.id);
		UICtrl.clearEditState();
		e.preventDefault();
	};

	const clearAllItemsClick = function () {
		//delete all item from data structure
		ItemCtrl.clearAllItems();
		const totalCalories = ItemCtrl.getTotalCalories();
		//add total calories to ui
		UICtrl.showTotalCalories(totalCalories);
		UICtrl.clearEditState();
		UICtrl.removeItems();
		StorageCtrl.clearItemsFromStorage();
		UICtrl.hideList();
	};
	//public methods
	return {
		init: function () {
			// clear edit state
			UICtrl.clearEditState();
			//fetch item from data structure
			const items = ItemCtrl.getItems();
			//check if any items
			if (items.length === 0) {
				UICtrl.hideList();
			} else {
				UICtrl.populateItemList(items);
			}
			const totalCalories = ItemCtrl.getTotalCalories();
			//add total calories to ui
			UICtrl.showTotalCalories(totalCalories);
			//load event listener
			loadEventListeners();
		},
	};
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();
