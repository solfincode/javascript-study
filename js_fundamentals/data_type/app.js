/*
primitive data type
stored directly in the location the variable access

data type
1.string
2.number
3.boolean
4.null
5.undefined
6.symbols(ES6)

types are associated with values not variables
we don't need to specify types
*/

/************** 
data type
***************/

//string
const name = "Stuart";
console.log("type of name is", typeof name);

//number
const age = 30;
console.log("type of age is ", typeof age);

//boolean
const isChanged = false;
console.log("type of isChanged is ", typeof isChanged);

//null
const car = null;
console.log("type of car is ", typeof car);

//symbol
const sym = Symbol();
console.log("type of sym is ", typeof sym);

/************** 
reference type
***************/
//array
const human = ["bob", "paul", "woody"];
console.log("type of human is ", typeof human);

//object literal
const address = {
	city: "San Francisco",
	state: "CA",
};
console.log("type of address is ", typeof address);

//date

const date = new Date();
console.log("type of date is ", typeof date);

/************** 
type conversion
***************/

//convert into String
let val = 5;
let stringFromNumber = String(5242422);
let stringFromBool = String(true);
console.log(val);
console.log(typeof val);
console.log(stringFromNumber.length);
console.log("stringFromBool is", typeof stringFromBool);
console.log("type of val, converted into string is ", typeof val.toString());

//convert from string into number
numString = "2423";
console.log("type of numString is", typeof numString);
console.log("type of converted numString is", typeof Number(numString));
console.log(Number(numString).toFixed(2));

//convert from boolean into number
bool = true;
console.log("convert from boolean into nubmer is", Number(bool));

//parseInt and parseFloat
console.log("parseInt is ", parseInt(200.232));
console.log("parseFloat is ", parseFloat(2330.23));
