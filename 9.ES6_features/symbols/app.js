const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(Symbol("s") === Symbol("s"));

console.log(`hello string ${sym1.toString()}`);
const key1 = Symbol();
const key2 = Symbol("sym2");

const obj = {};
obj[key1] = "prop1";
obj[key2] = "prop2";

console.log(obj[key1]);

for (let i in obj) {
	console.log(`${i}: ${obj[i]}`);
}

console.log(JSON.stringify({ key: "prop" }));
