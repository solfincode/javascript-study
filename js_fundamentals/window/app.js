//window method object properties
window.console.log(123);
// window.alert("window alert");

//prompt
let name = prompt();
console.log("prompted name:", name);

//confirm
if (confirm("are you sure?")) {
	console.log("yes");
} else {
	console.log("no");
}

let height = window.outerHeight;
let width = window.outerWidth;

console.log("height:", height);
console.log("width:", width);

let innerHeight = window.innerHeight;
let innerWidth = window.innerWidth;

console.log("inner height:", innerHeight);
console.log("inner width:", innerWidth);

//scroll x and y
let scrollX = window.scrollX;
let scrollY = window.scrollY;

//location object
let host = window.location.hostname;
let port = window.location.port;
let href = window.location.href;
let search = window.location.search;
console.log(host);
console.log(port);
console.log(href);
console.log(search);

//reload
// window.location.reload();

//history object
// window.history.go(-1);
console.log(window.history.length);

//navigator
val = window.naviagtor;
/*
window.navigator.appName
window.navigator.appVersion
window.navigator.userAgent
window.navigator.platform
window.navigator.vendor
*/
