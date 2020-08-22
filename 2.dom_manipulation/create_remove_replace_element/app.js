/********************************
Create Element
*********************************/

const li = document.createElement("li");
li.className = "collections";
li.id = "newItem";
li.setAttribute("title", "new Item");

//appendChild
li.appendChild(document.createTextNode("create li and a link inside of it"));
console.log(li);

//append li as child to ul
const link = document.createElement("a");
link.className = "delete-item";
link.innerHTML = "--hello";
link.href = "#";
li.appendChild(link);
document.querySelector("ul.tasks").appendChild(li);

/********************************
replace Element
*********************************/

const newHeading = document.createElement("h1");
newHeading.id = "task-title";
newHeading.textContent = "this is new task list";
newHeading.className = "text-4xl";
newHeading.appendChild(document.createTextNode("Task list"));
//old heading
const oldHeading = document.getElementById("task-title");

const content = document.querySelector(".content");
content.replaceChild(newHeading, oldHeading);

/********************************
remove element
*********************************/

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove();
list.removeChild(lis[3]);

//class
const firstLi = document.querySelector("li:first-child");
const links = firstLi.children[0];
links.classList.add("done");
links.classList.remove("delete-item");
console.log(links.classList[0]);
console.log(links);

//attributes
//get attributes
console.log(links.getAttribute("href"));
//set href attributes
links.setAttribute("href", "www.google.com");
console.log(links.getAttribute("href"));
links.setAttribute("title", "google");

console.log(links);
