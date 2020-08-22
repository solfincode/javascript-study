const firstName = "william";
const lastName = "David";
const age = 30;
const str = "hello i love to learn code";
//concatenation
console.log(firstName + " " + lastName);

//appending
val1 = "Brad";
val1 += "Mobillion";
console.log(val1);

result = "hello i am " + firstName + " i am " + age + "years old";
console.log(result);

//escaping
sentence = "that's awesome";
console.log("escaping string:", sentence);

//concat method
sentence1 = firstName.concat(lastName);
console.log("concat:", sentence1);

//change case
const upperFirstName = firstName.toUpperCase();
console.log("uppercase:", upperFirstName);

const lowerFirstName = firstName.toLowerCase();
console.log("lowercase:", lowerFirstName);

//indexof
const indexof = firstName.indexOf("l");
console.log(indexof);

const lastindex = firstName.lastIndexOf("l");
console.log(lastindex);

//charAt
const indexString = firstName.charAt("2");
console.log("second index letter:", indexString);
const lastChar = firstName.charAt(firstName.length - 1);
console.log("last character:", lastChar);

//substring & slice
const subString = firstName.substring(0, 4);
const slicing = firstName.slice(0, 4);
console.log("substring: ", subString);
console.log("slicing:", slicing);

//split
const splitted = str.split(" ");
console.log("split:", splitted);

//replace
const rep = str.replace("hello", "hi");
console.log("replace:", rep);
