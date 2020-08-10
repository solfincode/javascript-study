/********************************
set local storage
*********************************/

localStorage.setItem("name", "John-local");

//session storage - once browser is closed, it is gone
sessionStorage.setItem("name", "Paul-session");

//remove storage
// localStorage.removeItem("name");

//get from storage
const name = localStorage.getItem("name");
console.log(name);

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	const task = document.getElementById("task").value;
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks = Array.from(tasks); //convert tasks into array
	tasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	const task_list = JSON.parse(localStorage.getItem("tasks"));

	//looping through tasks array and append into ul#lists dom
	task_list.forEach(function (el) {
		const ul = document.getElementById("lists");
		const li = document.createElement("li");
		ul.append(el, li);
	});
});
