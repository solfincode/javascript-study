//for loop

for (let i = 0; i < 10; i++) {
	if (i === 2) {
		console.log("this is my favorite number:", i);
		continue;
	}
	if (i === 5) {
		console.log("stopped number:", 5);
		break;
	}
	console.log("number:", i);
}

//while loop
let i = 0;
while (i < 10) {
	console.log("while loop number:", i);
	i++;
}

//do while loop
let y = 100;
do {
	console.log("number:", y);
	y--;
} while (y < 10);

//loop through array
const cars = ["ford", "tesla", "honda", "hyundai"];
for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}

//forEach
cars.forEach(function (el, index) {
	console.log("forEach loop element:", el, index);
});

//map
const users = [
	{ id: 1, name: "john" },
	{ id: 2, name: "kevin" },
	{ id: 3, name: "sarah" },
	{ id: 4, name: "paul" },
];

const ids = users.map(function (el) {
	return el.id;
});

console.log(ids);

//for in loop
const user = {
	firstName: "John",
	lastName: "william",
	age: 30,
};

for (let x in user) {
	console.log(`${x}:${user[x]}`);
}
