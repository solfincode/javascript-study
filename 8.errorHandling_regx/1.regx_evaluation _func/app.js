let re;
re = /hello/;
rei = /hello/i; // i = case sensitive
reg = /hello/g; //global search
//check console of re
// console.log(re);
// console.log(re.source);

const result = re.exec("hello world");
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - return true or false
const res1 = reg.test("hello");
console.log(res1);

//match() - return results array or null
const str2 = "hello string";
const res2 = str2.match(re);
console.log(res2);

//search - return index of first match if not found returns -1
const str3 = "hello there";
const res3 = str3.search(re);
console.log(res3);

//replace - return new string with some or all matches of a pattern
const str4 = "hello there";
const res4 = str4.replace(re, "Hi");
console.log(res4);
