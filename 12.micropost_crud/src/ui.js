class UI {
	constructor() {
		this.post = document.querySelector("#posts");
		this.titleInput = document.querySelector("#title");
		this.bodyInput = document.querySelector("#body");
		this.idInput = document.querySelector("#id");
		this.postSubmit = document.querySelector("#post-submit");
		this.formState = "add";
	}
	showPosts(posts) {
		let output = "";
		posts.forEach((post) => {
			output += `
                <div class="mb-4 max-w-sm rounded overflow-hidden shadow-lg p-10 mt-6">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <a href="#" class="edit text-red-700" data-id="${post.id}">edit</a>
                    <a href="#" class="delete text-blue-500" data-id="${post.id}">delete</a>
                </div>
            `;
		});
		this.post.innerHTML = output;
	}
	showAlert(message, className) {
		this.clearAlert();
		const div = document.createElement("div");
		div.classList = className;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector("#postsContainer");
		const posts = document.querySelector("#posts");
		container.insertBefore(div, posts);
		setTimeout(() => {
			this.clearAlert();
		}, 2000);
	}
	clearAlert() {
		const currentAlert = document.querySelector(".bg-red-100");
		if (currentAlert) {
			currentAlert.remove();
		}
	}
	clearField() {
		this.titleInput.value = "";
		this.bodyInput.value = "";
	}
	fillForm(data) {
		this.titleInput.value = data.title;
		this.bodyInput.value = data.body;
		this.idInput.value = data.id;
		this.changeFormState("edit");
	}
	clearIdInput() {
		this.idInput.value = "";
	}

	//change form state
	changeFormState(type) {
		if (type === "edit") {
			this.postSubmit.textContent = "update";
			this.postSubmit.className =
				"bg-orange-500 mt-6 w-full text-white font-bold py-2 px-4 rounded";
			//create cancel button element
			const button = document.createElement("button");
			button.className =
				"cancel bg-gray-600 mt-6 w-full text-white font-bold py-2 px-4 rounded";
			button.appendChild(document.createTextNode("cancel"));
			//get parent node
			const card = document.querySelector(".card");
			const formEnd = document.querySelector(".form-end");
			card.insertBefore(button, formEnd);
		} else {
			this.postSubmit.textContent = "post it";
			this.postSubmit.className =
				"mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
			//remove cancel button
			if (document.querySelector(".cancel")) {
				document.querySelector(".cancel").remove();
			}
			//clear ID
			this.clearIdInput();
			//clear text field
			this.clearField();
		}
	}
}

export const ui = new UI();
