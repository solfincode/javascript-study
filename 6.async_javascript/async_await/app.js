async function myfunc() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("hello");
		}, 1000);
	});

	const error = false;
	if (!error) {
		const res = await promise;
		return res;
	} else {
		await Promise.reject(new Error("something is wrong"));
	}
}

myfunc()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

// second usage of async
async function getUsers() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	//only proceed once its resolved
	const data = await response.json();
	return data;
}

getUsers().then((users) => console.log(users));
