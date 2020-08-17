const posts = [
	{ title: "post one", body: "this is post one" },
	{ title: "post two", body: "this is post two" },
];

// function createPost(post) {
// 	setTimeout(function () {
// 		posts.push(post);
// 	}, 2000);
// }

// function getPosts() {
// 	setTimeout(() => {
// 		let output = "";
// 		posts.forEach(function (post) {
// 			output += `<li>${post.title}</li>`;
// 		});
// 		document.body.innerHTML = output;
// 	}, 1000);
// }

// createPost({ title: "post three", body: "this is body three" });
// getPosts();

function createPost(post, callback) {
	setTimeout(function () {
		posts.push(post);
		callback();
	}, 3000);
}

function getPosts(post) {
	setTimeout(() => {
		let output = "";
		posts.forEach(function (post) {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

createPost({ title: "post three", body: "this is body three" }, getPosts);
