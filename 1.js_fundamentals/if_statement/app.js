const id = 100;

//equal to
if (id == 100) {
	console.log("correct");
} else {
	console.log("wrong");
}

//not equal to
if (id != 100) {
	console.log("correct");
} else {
	console.log("wrong");
}

//equal to value and type
val = "100";
if (val === 100) {
	console.log("correct");
} else {
	console.log("wrong");
}

if (val !== 100) {
	console.log("correct");
} else {
	console.log("wrong");
}

//greater than less than
if (id > 200) {
	console.log("more than 200");
} else if (id > 400) {
	console.log("more than 400");
} else {
	console.log("less than 200");
}

//logical operators
const name = "steve";
const age = 20;

//And &&
if (age > 0 && age < 12) {
	console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
	console.log(`${name} is teenager`);
} else {
	console.log(`${name} is an adult`);
}

//OR ||
if (age < 16 || age > 65) {
	console.log(`${name} can't run in race`);
} else {
	console.log(`${name} is registered for the race`);
}

//Ternary operator
console.log("ternary operator:", id === 100 ? "correct" : "wrong");
