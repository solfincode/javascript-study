const http = new HttpModule();
//get post
http
	.get("https://jsonplaceholder.typicode.com/users")
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

const data = {
	name: "paul",
	userName: "jone",
	email: "1234@gmail.com",
};

//create post
http
	.post("https://jsonplaceholder.typicode.com/users", data)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
//update post
http
	.put("https://jsonplaceholder.typicode.com/users/2", data)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
//delete post
http
	.delete("https://jsonplaceholder.typicode.com/users/2", data)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
