class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBookList(book) {
		const list = document.getElementById("book-list");

		// create tr element
		const row = document.createElement("tr");
		//insert cols
		row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
		list.appendChild(row);
	}
	showAlert(message, className) {
		const div = document.createElement("div");
		div.id = "alert";
		div.className = `${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector(".container");
		const form = document.querySelector("#book-form");
		container.insertBefore(div, form);
		setTimeout(function () {
			document.getElementById("alert").remove();
		}, 3000);
	}
	deleteBook(target) {
		if (target.className === "delete") {
			target.parentElement.parentElement.remove();
		}
	}
	clearField() {
		document.getElementById("title").value = "";
		document.getElementById("author").value = "";
		document.getElementById("isbn").value = "";
	}
}
//local storage
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem("books") === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem("books"));
		}
		return books;
	}
	static displayBooks() {
		const books = Store.getBooks();
		books.forEach(function (book) {
			const ui = new UI();
			ui.addBookList(book);
		});
	}
	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem("books", JSON.stringify(books));
	}
	static removeBook(isbn) {
		const books = Store.getBooks();
		books.forEach(function (book, index) {
			if (book.isbn === isbn) {
				books.splice(index, 1);
				console.log(books);
			}
			localStorage.setItem("books", JSON.stringify(books));
		});
	}
}
//dom load event
document.addEventListener("DOMContentLoaded", Store.displayBooks);
//event listener for adding book
document.getElementById("book-form").addEventListener("submit", function (e) {
	//get form value
	const title = document.getElementById("title").value,
		author = document.getElementById("author").value,
		isbn = document.getElementById("isbn").value;

	const book = new Book(title, author, isbn);

	//instantiate ui
	const ui = new UI();
	//validate
	if (title === "" || author === "" || isbn === "") {
		ui.showAlert(
			"please type input",
			"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
		);
	} else {
		//add book into table list
		ui.addBookList(book);
		Store.addBook(book);
		//success
		ui.showAlert(
			"success",
			"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
		);
		//clear filed
		ui.clearField();
	}

	e.preventDefault();
});

//eventlistener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
	const ui = new UI();
	ui.deleteBook(e.target);
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
	ui.showAlert(
		"book removed",
		"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
	);
	e.preventDefault();
});
