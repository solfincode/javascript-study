let re;
re = /hello/i;
//metacharacter symbol
re_start = /^h/i; // must start with
re_end = / world$/i; // must end with
re_beg = /^hello$/i; // must begin and end with
re_any = /h.llo$/i; // matches any one character
re_more = /h*llo$/i; // matches any character 0 or more times
re_option = /gre?a?y/i; //optional character
re_skip = /gre?a?y\?/i; //escape character

const str = "hello world";
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does not match ${re.source}`);
	}
}

reTest(re, str);
