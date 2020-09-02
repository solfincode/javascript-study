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
		logData: function () {
			return data;
		},
	};
})();
// ui controller
const UICtrl = (function () {
	const UISelector = {
		itemList: "#item-list",
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
			document.querySelector(UISelector.itemList).innerHTML = html;
		},
	};
})();
// app controller
const App = (function (ItemCtrl, UICtrl) {
	//public methods
	return {
		init: function () {
			console.log("initializing app...");
			//fetch item from data structure
			const items = ItemCtrl.getItems();
			UICtrl.populateItemList(items);
		},
	};
})(ItemCtrl, UICtrl);

App.init();
