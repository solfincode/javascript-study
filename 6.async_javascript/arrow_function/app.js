// function declaration
const sayHello = function () {
	console.log("hello");
};

const sayHelloArrow = () => {
	console.log("hello arrow function version");
};

const sayHelloArrowShort = () => "hello arrow function with short version";
const returnObjectArrow = () => ({ msg: "this is returned object" });

const naming = (firstName, lastName) =>
	console.log(`hello ${firstName} and ${lastName}`);

const users = ["billdooper", "paulilar", "willbho"];
const nameLength = users.map((name) => {
	return name.length;
});
sayHello();
sayHelloArrow();
console.log(sayHelloArrowShort());
console.log(returnObjectArrow());
naming("paul", "bill");
console.log(nameLength);
