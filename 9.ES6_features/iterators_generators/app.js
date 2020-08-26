/************
iterator
**********/
function nameIterator(names) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < names.length
				? { value: names[nextIndex++], done: false }
				: { done: true };
		},
	};
}

//create an arrays of names
const namesArr = ["jack", "john", "paul"];
//init iterator
const names = nameIterator(namesArr);
console.log(names.next());
console.log(names.next());

/************
generator
**********/
function* sayNames() {
	yield "jack";
	yield "paul";
	yield "john";
}

const name = sayNames();
console.log(name.next().value);
