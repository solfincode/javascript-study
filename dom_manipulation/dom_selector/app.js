/*****************
dom selector for single
*****************/

//document.getElementById
console.log(document.getElementById("task-title"));

//get things from the element
console.log("id:", document.getElementById("task-title").id);

const taskTitle = document.getElementById("task-title");
//change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "white";
taskTitle.style.marginTop = "10px";
taskTitle.style.width = "380px";
taskTitle.style.padding = "10px";
taskTitle.style.borderRadius = "5px";

//change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks by innerText";
taskTitle.innerHTML =
	'<span style="color:#ed8936">task list by innerHTML</span>';

//query selector - document.querySelector()
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".content"));

document.querySelector("li").style.color = "#ed8936";

/*****************
dom selector for multiple
*****************/

//document.getElementByClassName
const items = document.getElementsByClassName("items");
console.log(items);
items[3].style.color = "#ed8936";
items[4].textContent = "imac pro";

/*******************/
//document.elementsByTagName and make it array and reversed it
/*******************/
// document.getElementsByTagName
// let lis = document.getElementsByTagName("li");
// console.log("byTag:", lis);

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function (li, index) {
// 	console.log(li.className);
// 	li.textContent = `${index}:hello`;
// });
// console.log("array:", lis);

/*******************/
//document.querySelectorAll
/*******************/
const listItems = document.querySelectorAll("ul li.items");
listItems.forEach(function (li, index) {
	li.textContent = `${index}:using querySelectAll`;
});

const liodd = document.querySelectorAll("li:nth-child(odd)");
const lieven = document.querySelectorAll("li:nth-child(even)");

liodd.forEach(function (li, index) {
	li.style.background = "#f4f4f4";
});

lieven.forEach(function (li, index) {
	li.style.background = "#333";
	li.style.color = "#fff";
});
