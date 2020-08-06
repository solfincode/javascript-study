/************** 
convert into string
***************/

//number to string
let val = 3242 + 242;

console.log(val);
console.log(typeof val);
console.log("type of converted val is", typeof String(val));

//bool to string
let bool = true;
console.log("type of bool is", typeof String(bool));

// date to string
let date = new Date();
console.log("type of converted date is", typeof String(date));

//array to string
let arrayEl = [1, 23, 3, 4];
console.log("type of converted arrayEl is", typeof String(arrayEl));

//toString
let value = (242).toString();
console.log("type of value,242 is", typeof value);

/************** 
convert into number
***************/

let num = "5342";
console.log("type of converted num is", typeof Number(num));
console.log(Number(num).toFixed(2));

//bool to number
console.log("convert bool true to number is", Number(true));

console.log("result of parseInt is", parseInt("100.23"));
console.log("result of parseFloat is", parseFloat("100.23"));

//sum
let val1 = 203;
let val2 = 342;
let sum = val1 + val2;
console.log(sum);
