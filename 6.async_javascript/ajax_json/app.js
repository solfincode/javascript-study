/******* get customer 1 ******/

document.getElementById("button1").addEventListener("click", loadCustomer);
function loadCustomer(e) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "customer.json", true);
	xhr.onload = function () {
		if (this.status === 200) {
			const customer = JSON.parse(this.responseText);
			const output = `
            <ul>
            <li>ID:${customer.id}</li>
            <li>name:${customer.name}</li>
            <li>company:${customer.company}</li>
            <li>phone:${customer.phone}</li>
            </ul>
            `;
			document.getElementById("customer").innerHTML = output;
		}
	};
	xhr.send();
}

/******* get customer2 ******/
//load customers
document.getElementById("button2").addEventListener("click", loadCustomers);
function loadCustomers(e) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "customers.json", true);
	xhr.onload = function () {
		if (this.status === 200) {
			const customers = JSON.parse(this.responseText);
			let output = "";
			customers.forEach(function (customer) {
				output += `
            <ul>
            <li>ID:${customer.id}</li>
            <li>name:${customer.name}</li>
            <li>company:${customer.company}</li>
            <li>phone:${customer.phone}</li>
            </ul>
            `;
			});

			document.getElementById("customers").innerHTML = output;
		}
	};
	xhr.send();
}
