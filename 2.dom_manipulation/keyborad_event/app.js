/********************************
keyboard event
keyup
keypress
keydown
focus
cut
paste
*********************************/

const addBtn = document.getElementById("addBtn");
const heading = document.getElementById("task-title");
const taskInput = document.querySelector("input");
const typed = document.getElementById("typed");
const select = document.querySelector("select");
// addBtn.addEventListener("click", runEvent);
taskInput.addEventListener("keydown", keyEvent);

select.addEventListener("change", runEvent);

function runEvent(e) {
	console.log(`event type:${e.type}`);
	typed.innerText = e.target.value;
	//get input value
	// console.log(taskInput.value);
	//clear input value
	// taskInput.value = "";
	// e.preventDefault();
}

function keyEvent(e) {
	console.log(`event type:${e.type}`);
	heading.innerText = e.target.value;
}
