/**********
flags
Regular expressions may have flags that affect the search.

There are only 6 of them in JavaScript:

i - with this flag the search is case-sensitive 
g - with this flag the search look for all matches , only the first match is returned
m - multiline mode
s - enable dotall mode that allows a dot . to match newline character \n
u - enable full unicode support
y - sticky mode - searching at the exact position in the text
************/

let re;
re = /hello/i;
//metacharacter symbol
let re_start = /^h/i; // must start with
let re_end = /world$/i; // must end with
let re_beg = /^hello$/i; // must begin and end with
let re_any = /h.llo/i; // matches any one character
let re_more = /h*llo/i; // matches any character 0 or more times
let re_option = /gre?a?y/i; //optional character
let re_skip = /gre?a?y\?/i; //escape character

const str = "hello world";
const result = re.exec(str);
console.log(result);

const str2 = "gray";
const res2 = reb.exec(str);
console.log(res2);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does not match ${re.source}`);
	}
}

reTest(re_any, str);
