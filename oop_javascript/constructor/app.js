/********* 
constructor & object literal & this keyword 
*********/

//object literal
const people = {
	name: "John",
	age: 30,
};
console.log("object literal age:", people.age);

//person constructor
function Person(name, age, dob) {
	this.name = name;
	this.age = age;
	this.birthday = new Date(dob);
	this.calcAge = function () {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
}

const john = new Person("john", 30, "1 - 10 - 1920");
console.log("person constructor name:", john.name);
console.log("person constructor age:", john.age);
console.log("person constructor dob:", john.birthday);
console.log("person constructor age:", john.calcAge());

/********* 
built in constructor
*********/

const name1 = "jeff";
const name2 = new String("jeff");

console.log("type of name1:", typeof name1);
console.log("type of name2:", typeof name2);

if (name2 === "jeff") {
	console.log("name2 is identical with jeff");
} else {
	console.log("no, name2 isn't identical with jeff");
}

//number object
const num1 = 2;
const num2 = new Number(2);
console.log("type of num2:", typeof num2);

//boolean
const boo1 = true;
const boo2 = new Boolean(true);

//function
const getSum1 = function (x, y) {
	return x + y;
};

const getSum2 = new Function("x", "y", "return 1+1");

//object
const john1 = { name: "john" };
const john2 = new Object({ name: "john" });

//array
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3, 4);

//regular expression
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
