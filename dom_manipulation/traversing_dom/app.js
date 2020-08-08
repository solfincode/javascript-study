const list = document.querySelector("ul.tasks");
const listItem = document.querySelector("li.items:first-child");
console.log(list);
console.log(listItem);

//get child nodes
console.log(list.childNodes);
console.log(list.childNodes[0].nodeName);
console.log(list.childNodes[0].nodeType);

/*
1-Element
3-Text node
8-comment
9-document itselft
10-doctype
*/

//get children element nodes
console.log(list.children);
console.log(list.children[3]);
list.children[3].style.color = "red";

console.log(list.children[3].children[0]);

//firstChild
console.log((list.children[3].firstChild.textContent = "hello ipad"));
console.log(list.children[3].firstElementChild);

//lastChild
console.log(list.children[3].lastChild);
console.log(list.children[3].lastElementChild);

// count child element
console.log(list.childElementCount);

//listItem parentNode
console.log(listItem.parentNode);
console.log(listItem.parentElement);
console.log(listItem.parentElement.parentElement);

//get next sibling
console.log(listItem.nextSibling);
