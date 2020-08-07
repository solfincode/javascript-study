const numbers = [1, 2, 3, 4, 5, 67, 8, 9, 10];
const numbers2 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 12];
const fruit = ["apple", "carot", "banana", "pineapple"];
const mixed = [22, "hello", "true", "undefined", "null", "{a:1,b:2}"];

console.log(numbers);

//length
console.log("length of array:", numbers.length);

//check if it is array
console.log("Numbers is ", Array.isArray(numbers));

//indexing
console.log("3rd element from numbers array is", numbers[3]);

//insert into array
numbers[3] = 1000;
console.log("insert:", numbers);

//push element into last
numbers.push(90000);
console.log("push:", numbers);

//add on to front
numbers.unshift(-1000);
console.log("unshift:", numbers);

//take element off from end
numbers.pop();
console.log("pop", numbers);

//take element off from front
numbers.shift();
console.log("shift:", numbers);

//splice value
numbers.splice(1, 1);
console.log("splice:", numbers);

//reverse
numbers.reverse();
console.log("reverse:", numbers);

//concat
newNum = numbers.concat(numbers2);
console.log("newNum:", newNum);

//sort
sorted = numbers.sort();
console.log("sorted:", sorted);

//ascending sort,compare function
ascending = numbers.sort(function (x, y) {
	return x - y;
});

console.log("ascending:", ascending);

//descending sort,compare function
desc = numbers.sort(function (x, y) {
	return y - x;
});

console.log("descending:", desc);

function over50(num) {
	return num > 50;
}

console.log("over50:", numbers.find(over50));
