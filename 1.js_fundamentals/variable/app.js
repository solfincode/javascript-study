let name = "Daivd";
console.log(name);

//variable can be included with "letters, number, _ , $"
//variable could not start with numbers

//multi words
let firstName = "Woody";
console.log("camel case - firstName: ", firstName);

let first_name = "Willy";
console.log("underscore - first_name: ", first_name);

//const - can't be changed or reassigned
const nameString = "John";
console.log(nameString);

//error case, you already assigned string on name
//const name = "Paul";

//object
const person = {
	name: "Wooly",
	age: 30,
};

person.name = "Kelly";
console.log(person);

//array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
