const user = { email: "abce@gmail.com" };

try {
	myFunc();
	if (!user.name) {
		throw new SyntaxError("user has no name");
	}
} catch (e) {
	console.log(e.message);
	console.log(e.name);
	console.log(`user error:${e.message}`);
} finally {
	console.log("finally runs");
}

console.log("program continued...");
