document.getElementById("name").addEventListener("keyup", validateName);
document.getElementById("zipcode").addEventListener("keyup", validateZip);
document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("phone").addEventListener("keyup", validatePhone);

function validateName() {
	const feedback = document.getElementById("feed-name");
	const name = document.getElementById("name");
	const re = /^[a-zA-Z]{1,10}$/;
	if (!re.test(name.value)) {
		feedback.classList.remove("hidden");
	} else {
		feedback.classList.add("hidden");
	}
}

function validateZip() {
	const feedback = document.getElementById("feed-zip");
	const zip = document.getElementById("zipcode");
	const re = /^[0-9]{5}(-[0-9]{4})?$/;
	if (!re.test(zip.value)) {
		feedback.classList.remove("hidden");
	} else {
		feedback.classList.add("hidden");
	}
}

function validateEmail() {
	const feedback = document.getElementById("feed-email");
	const email = document.getElementById("email");
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	if (!re.test(email.value)) {
		feedback.classList.remove("hidden");
	} else {
		feedback.classList.add("hidden");
	}
}
function validatePhone() {
	const feedback = document.getElementById("feed-phone");
	const phone = document.getElementById("phone");
	const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
	if (!re.test(phone.value)) {
		feedback.classList.remove("hidden");
	} else {
		feedback.classList.add("hidden");
	}
}
