const PageState = function () {
	let currentState = new homeState(this);
	this.init = function () {
		this.change(new homeState());
	};
	this.change = function (state) {
		currentState = state;
	};
};

const homeState = function (page) {
	document.querySelector("#heading").textContent = "home us";
	document.querySelector("#content").innerHTML = `
    <div>home state</div>
    `;
};

const aboutState = function (page) {
	document.querySelector("#heading").textContent = "about us";
	document.querySelector("#content").innerHTML = `
    <div>about state</div>
    `;
};

const contactState = function (page) {
	document.querySelector("#heading").textContent = "contact us";
	document.querySelector("#content").innerHTML = `
    <div>contact state</div>
    `;
};

const page = new PageState();
page.init();
const home = document.getElementById("home"),
	about = document.getElementById("about"),
	contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
	page.change(new homeState());
	e.preventDefault();
});

about.addEventListener("click", (e) => {
	page.change(new aboutState());
	e.preventDefault();
});

contact.addEventListener("click", (e) => {
	page.change(new contactState());
	e.preventDefault();
});
