document.getElementById("text").addEventListener("click", getText);
document.getElementById("json").addEventListener("click", getJson);
document.getElementById("api").addEventListener("click", getApi);

//get text
function getText() {
	fetch("text.txt")
		.then(function (res) {
			return res.text();
		})
		.then(function (data) {
			console.log(data);
			document.getElementById("output").innerHTML = data;
		})
		.catch(function (err) {
			console.log(err);
		});
}
//get json
function getJson() {
	fetch("text.json")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			console.log(data);
			let output = "";
			data.forEach(function (el) {
				output += `<li>${el.title}</li>`;
			});

			document.getElementById("output").innerHTML = output;
		})
		.catch(function (err) {
			console.log(err);
		});
}
//get api
function getApi() {
	fetch("https://api.github.com/users")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			let output = "";
			data.forEach(function (el) {
				output += `<li>${el.login}</li>`;
			});

			document.getElementById("output").innerHTML = output;
		})
		.catch(function (err) {
			console.log(err);
		});
}
