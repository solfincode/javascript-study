//define ui variable
const form = document.querySelector("#form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
//load all eventlistener
loadEventListener();

function loadEventListener() {
	form.addEventListener("submit", addTask);
	taskList.addEventListener("click", removeTask);
	clearBtn.addEventListener("click", clearTask);
	filter.addEventListener("keyup", filterTasks);
}

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
	//clear input
	taskInput.value = "";
	e.preventDefault();
}

//remove task
function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("are you sure?")) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

//clear task
function clearTask(e) {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

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
