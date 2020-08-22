const http = new httpModule();
const posts = http.get("https://jsonplaceholder.typicode.com/posts", function (
	err,
	posts
) {
	if (err) {
		console.log(err);
	} else {
		console.log(posts);
	}
});

//get single post
const single = http.get(
	"https://jsonplaceholder.typicode.com/posts/1",
	function (err, post) {
		if (err) {
			console.log(err);
		} else {
			console.log(post);
		}
	}
);

//creating data
const data = {
	title: "custom post",
	body: "this is custom post body",
};
//create post
http.post("https://jsonplaceholder.typicode.com/posts", data, function (
	err,
	post
) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

//put post
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (
	err,
	post
) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

//delete
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
	err,
	res
) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});
