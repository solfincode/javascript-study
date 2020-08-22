/********************************
event bubbling
*********************************/
document.querySelector(".title").addEventListener("click", function (e) {
	console.log("title");
});

document.querySelector(".content").addEventListener("click", function (e) {
	console.log("content");
});

/********************************
event delegation
*********************************/
// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);
function deleteItem(e) {
	// #1 way
	// if (e.target.className === "delete-item") {
	// 	console.log("delete");
	// }

	//#2 way
	if (e.target.classList.contains("delete-item")) {
		console.log("deleted");
		e.target.parentElement.remove();
	}
}
