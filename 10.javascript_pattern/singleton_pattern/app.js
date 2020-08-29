const Singleton = (function () {
	let instance;
	function createInstance() {
		const object = new Object("object instance !!");
		return object;
	}
	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

const instanceA = Singleton.getInstance();
