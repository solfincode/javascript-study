/********* 
es6 class
*********/
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}
	greeting() {
		return `hello there ${this.firstName} ${this.lastName}`;
	}
	calcAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	static addNum(x, y) {
		return x + y;
	}
}

const mary = new Person("Mary", "jack", "Jan 2 1902");
console.log(mary.calcAge());
console.log(Person.addNum(1, 2)); // calling static method

/********* 
sub class
*********/
class PhoneBook {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}
	greeting() {
		return `hello there ${this.firstName} ${this.lastName}`;
	}
}

class Customer extends PhoneBook {
	constructor(firstName, lastName, phone, membership) {
		super(firstName, lastName);
		this.phone = phone;
		this.membership = membership;
	}
	static getMembershipCost() {
		return 500;
	}
}
const john = new Customer("john", "william", "24323", "standard");
console.log(john.greeting());
console.log("membership cost:", Customer.getMembershipCost());
