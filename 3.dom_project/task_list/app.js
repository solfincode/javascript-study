//define ui variable
const form = document.querySelector("#form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
//load all eventlistener
loadEventListener();

/******** define function for eventListener ********/
function loadEventListener() {
	document.addEventListener("DOMContentLoaded", getTasks);
	form.addEventListener("submit", addTask);
	taskList.addEventListener("click", removeTask);
	clearBtn.addEventListener("click", clearTask);
	filter.addEventListener("keyup", filterTasks);
}
//get taskts
function getTasks() {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.forEach(function (task) {
		//create li element
		const li = document.createElement("li");
		//add class
		li.className = "collection-item";
		//create textnode and append to li
		li.appendChild(document.createTextNode(task));

		//create a link element
		const link = document.createElement("a");
		//add class
		link.className = "delete-item";
		//add html into link
		link.innerHTML = '<a href="#">--delete</a>';
		//append link to li
		li.appendChild(link);
		//append li to ul
		taskList.appendChild(li);
	});
}
//add Task
function addTask(e) {
	if (taskInput.value === "") {
		alert("add a task");
	}
	//create li element
	const li = document.createElement("li");
	//add class
	li.className = "collection-item";
	//create textnode and append to li
	li.appendChild(document.createTextNode(taskInput.value));

	//create a link element
	const link = document.createElement("a");
	//add class
	link.className = "delete-item";
	//add html into link
	link.innerHTML = '<a href="#">--delete</a>';
	//append link to li
	li.appendChild(link);
	//append li to ul
	taskList.appendChild(li);
	//store to local storage
	storeTaskLocalStorage(taskInput.value);
	//clear input
	taskInput.value = "";
	e.preventDefault();
}
//store task
function storeTaskLocalStorage(task) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}
//remove task
function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("are you sure?")) {
			e.target.parentElement.parentElement.remove();
			//remove from local storate
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
}
// remove from local storage
function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.forEach(function (task, index) {
		if (taskItem.firstChild.data === task) {
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

//clear task
function clearTask(e) {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	//clear local storage
	localStorage.clear();
}

//fiter function
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	document.querySelectorAll(".collection-item").forEach(function (el) {
		const item = el.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
}
