let b = 1;
const c = 2;

function test() {
	let b = "string";
	let c = "great";
	console.log(c);
}

test();
console.log("global scope:", b, c);
