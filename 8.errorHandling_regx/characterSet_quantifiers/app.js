//brackets [] - character sets
let reb = /gr[ae]y/i; //must be a or e
let renot = /gr[^ae]y/i; //match anything except a or e
let relower = /gr[a-z]y/i; //match any lower case
let renum = /gr[0-9]y/i; //match any number digit

//braces {} -quantifier
let recount1 = /Hel{2}o/i; //must occur exactly {m} count
let recount2 = /Hel{2,4}o/i; //must occur exactly between {m,n} count
let recount3 = /Hel{2,}o/i; //must occur exactly at least {m} count

//parentheses () - grouping
let regroup = /([0-9])x{3}/;

// short hand character classes
let reShort = /\w/; //word character - alphanumeric
let reWord = /\w+/; //one or more
let reNon = /\W/; //non-word character
let reAnyDigit = /\d/; //match any digit
let reDigit = /\d+/; //match any digit or more times
let reNonDigit = /\D/; //match any non digit
let reNonWhite = /\s/; //match any white space
let reNonWhite = /\S/; //match any non white space

//assertion
let reassertion = /x(?=y)/; //match x only if followed by y

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
