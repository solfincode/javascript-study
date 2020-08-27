//destructuring
let a, b;
[a, b] = [100, 200];
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400 });
console.log(a, b);
const people = ["john", "beth", "mike"];
const [person1, person2, person3] = people;
console.log(person1, person2);

function getPeople() {
	return ["john", "beth", "mike"];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2);

//object destructuring
const person = {
	name: "john",
	age: 23,
	city: "SF",
	gender: "male",
};

//old es5
const name = person.name,
	age = person.age,
	city = person.city;

//es6
const { name, age, city, gender } = person;
console.log(name, age, city);
