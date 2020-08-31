const User = function (name) {
	this.name = name;
	this.chatroom = null;
};

User.prototype = {
	send: function (message, to) {
		this.chatroom.send(message, this, to);
	},
	receive: function (message, from) {
		console.log(`${name} to ${this.name}:${message}`);
	},
};

const Chatroom = function () {
	let users = {};
	return {
		register: function (user) {
			users[user.name] = user;
			user.chatroom = this;
		},
		send: function (message, from, to) {
			if (to) {
				//single user message
				to.receive(message, from);
			} else {
				for (key in users) {
					if (users[key] !== from) {
						users[key].receive(message, from);
					}
				}
			}
		},
	};
};

const paul = new User("paul");
const jelly = new User("jelly");

const chatroom = new Chatroom();
chatroom.register(paul);
chatroom.register(jelly);
paul.send("hello jelly", jelly);
jelly.send("good", paul);
