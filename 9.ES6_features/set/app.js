//set - stores unique value with any type

set1.add(100);
set1.add("a string");
set1.add({ name: "paul" });

console.log(set1);

const set2 = new Set([100, "a string", true]);
console.log(set2);

console.log(set1.size);

//check for value
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "paul" }));

//delete from set
set1.delete(100);
console.log(set1);

//iteration
for (let item of set1) {
	console.log(item);
}

set1.forEach((value) => {
	console.log(value);
});

//conver to array
const setArr = Array.from(set1);
console.log(setArr);
