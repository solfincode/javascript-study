/********************************
Event listener & object
*********************************/
// document.querySelector(".clear").addEventListener("click", function (e) {
// 	console.log("clicked");
// 	e.preventDefault();
// });

document.querySelector(".clear").addEventListener("click", onClick);

function onClick(e) {
	// console.log("clicked");
	// e.preventDefault();
	console.log(e.target);
	console.log(e.target.id);
	console.log(e.target.className);
	console.log(e.target.classList);
	//coords event relative to the window
	console.log(e.clientX);
	//coords event relative to the element
	console.log(e.offsetX);
}
