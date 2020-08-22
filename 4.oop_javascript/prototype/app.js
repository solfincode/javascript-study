/********** 
prototype 
***********/
//person constructor
function Person(name, age, dob) {
	this.name = name;
	this.age = age;
	this.birthday = new Date(dob);
}

Person.prototype.calcAge = function () {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};
const john = new Person("jonny", 30, "10 - 1 - 1920");
const mary = new Person("mary", 20, "Jan 2 2049");
console.log(john.calcAge());

console.log(mary.hasOwnProperty("name"));

/********** 
prototypal inheritance
***********/

function Car(color, shape) {
	this.color = color;
	this.shape = shape;
}

Car.prototype.moving = function () {
	return `${this.color} car with ${this.shape} engine is starting`;
};

const pcar = new Car("red", "universe");
console.log(pcar.moving());

function Truck(color, shape) {
	Car.call(color, shape);
	this.color = color;
	this.shape = shape;
}
//inheritance car prototype method
Truck.prototype = Object.create(Car.prototype);
//create instance
const ptruck = new Truck("blue", "rectangle");
console.log(ptruck.moving());

/********** 
object.create
***********/

const personPrototypes = {
	greeting: function () {
		return `hello there ${this.firstName} ${this.lastName}`;
	},
	getMarried: function (newLastName) {
		this.lastName = newLastName;
	},
};

//object creation1
const paul = Object.create(personPrototypes);
paul.firstName = "paul";
paul.lastName = "William";
paul.age = 30;
console.log(paul.greeting());
paul.getMarried("Jack");
console.log(paul.greeting());

//object creation alternative way
const kevin = Object.create(personPrototypes, {
	firstName: { value: "kevin" },
	lastName: { value: "paul" },
	age: { value: 20 },
});

console.log("kevin object:", kevin);
