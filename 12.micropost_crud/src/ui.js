class UI {
	constructor() {
		this.post = document.querySelector("#posts");
		this.titleInput = document.querySelector("#title");
		this.bodyInput = document.querySelector("#body");
		this.idInput = document.querySelector("#id");
		this.postSubmit = document.querySelector("#post-submit");
		this.forState = "add";
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
}

export const ui = new UI();
