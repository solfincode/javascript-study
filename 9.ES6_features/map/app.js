const map1 = new Map();

const key1 = "some string",
	key2 = {},
	key3 = function () {};

map1.set(key1, "value of key1");
map2.set(key2, "value of key2");
map3.set(key3, "value of key3");

console.log(map1.get(key1), map2.get(key2), map3.get(key3));

// count value
console.log(map1.size);

//iterattion
for (let [key, value] of map1) {
	console.log(`${key}:${value}`);
}

//iterate key only
for (let key of map1.keys()) {
	console.log(key);
}

//iterate value only
for (let value of map1.value()) {
	console.log(value);
}

//loop wit foreach
map1.forEach(function (value, key) {
	console.log(`${key}:${value}`);
});

//convert to array
const keyValArr = Array.from(map1);
console.log(keyValArr);

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);
