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
			{ id: 0, name: "Steak Dinner", calories: 1200 },
			{ id: 1, name: "cookie", calories: 3200 },
			{ id: 2, name: "burger", calories: 5200 },
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
		itemNameInput: "#item-name",
		itemCaloriesInput: "#item-calories",
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
            <a href="#" class="secondary-content">delete</a>`;
			document
				.querySelector(UISelectors.itemList)
				.insertAdjacentElement("beforeend", li);
		},
		clearInput: function () {
			document.querySelector(UISelectors.itemNameInput).value = "";
			document.querySelector(UISelectors.itemCaloriesInput).value = "";
		},
		hideList: function () {
			document.querySelector(UISelectors.itemList).style.display = "none";
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
	};

	const itemAddSubmit = function (e) {
		//get from input from ui ctrl
		const input = UICtrl.getItemInput();
		if (input.name !== "" && input.calories !== "") {
			const newItem = ItemCtrl.addItem(input.name, input.calories);
			UICtrl.addListItem(newItem);
			//clear field
			UICtrl.clearInput();
		}
		e.preventDefault();
	};
	//public methods
	return {
		init: function () {
			console.log("initializing app...");
			//fetch item from data structure
			const items = ItemCtrl.getItems();
			//check if any items
			if (items.length === 0) {
				UICtrl.hideList();
			} else {
				UICtrl.populateItemList(items);
			}
			//load event listener
			loadEventListeners();
		},
	};
})(ItemCtrl, UICtrl);

App.init();
