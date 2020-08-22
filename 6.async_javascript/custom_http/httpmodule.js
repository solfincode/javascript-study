function httpModule() {
	this.http = new XMLHttpRequest();
}

// make http get request
httpModule.prototype.get = function (url, callback) {
	this.http.open("GET", url, true);
	this.http.onload = () => {
		if (this.http.status === 200) {
			callback(null, this.http.responseText);
		} else {
			callback("err:", this.http.status);
		}
	};
	this.http.send();
};
// make http post request
httpModule.prototype.post = function (url, data, callback) {
	this.http.open("POST", url, true);
	this.http.setRequestHeader("Content-type", "application/json");
	this.http.onload = () => {
		callback(null, this.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};
// make http put request
httpModule.prototype.put = function (url, data, callback) {
	this.http.open("PUT", url, true);
	this.http.setRequestHeader("Content-type", "application/json");
	this.http.onload = () => {
		callback(null, this.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};
// make http delete request
httpModule.prototype.delete = function (url, callback) {
	this.http.open("DELETE", url, true);
	this.http.onload = () => {
		if (this.http.status === 200) {
			callback(null, "post deleted");
		} else {
			callback("err:", this.http.status);
		}
	};
	this.http.send();
};
