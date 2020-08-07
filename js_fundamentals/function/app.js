//function declaration
function greet(firstName = "John", lastName = "Doh") {
	// if (typeof firstName === "undefined") {
	// 	firstName = "John";
	// }
	// if (typeof lastName === "undefined") {
	// 	lastName = "Doh";
	// }
	return "hello " + firstName + " " + lastName;
}
console.log(greet("John", "William"));

//function expression
const square = function (x) {
	return x * x;
};

console.log("square:", square(10));

//immidiately invokable function expression
(function (name) {
	console.log("hello " + name);
})("brim");

//properties methods
const todo = {
	add: function () {
		console.log("add toto...");
	},
	edit: function (id) {
		console.log(`edit todo ${id}`);
	},
};

todo.delete = function () {
	console.log("delete todo");
};

todo.add();
todo.edit(23);
todo.delete();
