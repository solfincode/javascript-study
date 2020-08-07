const person = {
	name: "steve",
	age: 30,
	email: "email@gmail.com",
	hobbies: ["computer coding", "watchiing tv"],
	address: {
		city: "SF",
		states: "CA",
	},
	getBirthDate: function () {
		return 1920 - this.age;
	},
};

console.log(person);

//add firstName
person.firstName = "jobs";
console.log(person);

//calling value from object
console.log("city:", person.address.city);
console.log("age:", person.age);
console.log("birthdate:", person.getBirthDate());
console.log("hobby:", person.hobbies[0]);

const people = [
	{ name: "hori", age: 30 },
	{ name: "paul", age: 20 },
];

for (let i = 0; i < people.length; i++) {
	console.log("people object:", people[i].name);
}
