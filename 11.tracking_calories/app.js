// storage controller

// item controller
const ItemCtrl = (function () {
	const Item = function (id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	};

	//data structure
	const data = {
		items: [
			// { id: 0, name: "Steak Dinner", calories: 1200 },
			// { id: 1, name: "cookie", calories: 3200 },
			// { id: 2, name: "burger", calories: 5200 },
		],
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
// ui controller
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
// app controller
const App = (function (ItemCtrl, UICtrl) {
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
		UICtrl.clearEditState();
		e.preventDefault();
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
})(ItemCtrl, UICtrl);

App.init();
