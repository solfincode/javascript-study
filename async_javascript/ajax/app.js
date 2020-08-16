/**************
 AJAX
 -make async requests in background
 -no page reload or refresh
 -fetch data

 XMLHttpRequest
 -api in the form of object
 - use json
 - method transfer data between client and server
 
 other method
 -fetch api
 -axios
 -superagent
 -node HTTP
 **************/

document.getElementById("button").addEventListener("click", loadData);
function loadData() {
	//create xhr object
	const xhr = new XMLHttpRequest();
	//200 - ok , 403 - forbidden , 40 - not found
	xhr.open("GET", "data.txt", true);
	xhr.onprogress = function () {
		console.log("ready state:", xhr.readyState);
	};
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);
			document.getElementById(
				"output"
			).innerHTML = `<h1>${this.responseText}</h1>`;
		}
	};

	//xhr readyState
	// xhr.onreadystatechange = function () {
	// 	console.log("ready state:", xhr.readyState);
	// 	if (this.status === 200 && this.readyState === 4) {
	// 		console.log(this.responseText);
	// 	}
	// };

	/*
    readyState values
    0-request not initialized
    1-server connection established
    2-request received
    3-processing request
    4-request finished and response is ready
    */
	xhr.send();
}
