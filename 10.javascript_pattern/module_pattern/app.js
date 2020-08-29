//standard module pattern
const UICtrl = (function () {
	let text = "hello world";
	//declare private vars and function
	const changeText = function () {
		const element = document.querySelector("h1");
		element.textContent = text;
	};
	//declare public vars and function
	return {
		callChangeText: function () {
			changeText();
		},
	};
})();

UICtrl.callChangeText();

//revealing module pattern
const ItemCtrl = (function () {
	let data = [];
	function add(item) {
		data.push(item);
		console.log("item added ....");
	}
	function get(id) {
		return data.find((item) => {
			return item.id === id;
		});
	}
	return {
		add: add,
		get: get,
	};
})();

ItemCtrl.add({ id: 1, name: "john" });
