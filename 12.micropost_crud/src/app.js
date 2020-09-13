/*******************
module
********************/

//commonJS module
const person = require("./mymodule");
//es2015 module
// import { person2, sayHello } from "./mymodule2";
import * as mod from "./mymodule2";

console.log("CommonJs", person.name);
console.log("es2015", mod.person2.name);
console.log(mod.sayHello());

/*******************
http request
********************/
import { http } from "./http";
import { ui } from "./ui";
//get posts
document.addEventListener("DOMContentLoaded", getPosts);
document.querySelector("#post-submit").addEventListener("click", submitPost);
document.querySelector("#posts").addEventListener("click", deletePost);
document.querySelector("#posts").addEventListener("click", enableEdit);
document.querySelector(".card").addEventListener("click", cancelEdit);
//get post
function getPosts() {
	http
		.get("http://localhost:3000/posts")
		.then((data) => ui.showPosts(data))
		.catch((err) => console.log(err));
}

// add post
function submitPost() {
	const title = document.querySelector("#title").value;
	const body = document.querySelector("#body").value;
	const id = document.querySelector("#id").value;
	const data = {
		title,
		body,
	};
	if (title === "" || body === "") {
		ui.showAlert(
			"please add post",
			"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
		);
	} else {
		if (id === "") {
			//create post
			http
				.post("http://localhost:3000/posts", data)
				.then((data) => {
					ui.showAlert(
						"post added",
						"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
					);
					ui.clearField();
					getPosts();
				})
				.catch((err) => console.log(err));
		} else {
			http
				.put(`http://localhost:3000/posts/${id}`, data)
				.then((data) => {
					ui.showAlert(
						"post updated",
						"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
					);
					ui.changeFormState("add");
					getPosts();
				})
				.catch((err) => console.log(err));
		}
	}
}

//delete post
function deletePost(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		const id = e.target.dataset.id;
		if (confirm("are you sure?")) {
			http
				.delete(`http://localhost:3000/posts/${id}`)
				.then((data) => {
					ui.showAlert(
						"post removed",
						"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
					);
					ui.clearField();
					getPosts();
				})
				.catch((err) => console.log(err));
		}
	}
}

function enableEdit(e) {
	e.preventDefault();
	if (e.target.classList.contains("edit")) {
		const id = e.target.dataset.id;
		const body = e.target.previousElementSibling.textContent;
		const title =
			e.target.previousElementSibling.previousElementSibling.textContent;
		const data = {
			id,
			body,
			title,
		};

		ui.fillForm(data);
	}
}

function cancelEdit(e) {
	e.preventDefault();
	if (e.target.classList.contains("cancel")) {
		ui.changeFormState("add");
	}
}
