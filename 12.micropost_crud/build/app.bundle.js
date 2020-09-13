/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mymodule2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mymodule2 */ \"./src/mymodule2.js\");\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ \"./src/http.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/*******************\nmodule\n********************/\n//commonJS module\nconst person = __webpack_require__(/*! ./mymodule */ \"./src/mymodule.js\"); //es2015 module\n// import { person2, sayHello } from \"./mymodule2\";\n\n\n\nconsole.log(\"CommonJs\", person.name);\nconsole.log(\"es2015\", _mymodule2__WEBPACK_IMPORTED_MODULE_0__[\"person2\"].name);\nconsole.log(_mymodule2__WEBPACK_IMPORTED_MODULE_0__[\"sayHello\"]());\n/*******************\nhttp request\n********************/\n\n\n //get posts\n\ndocument.addEventListener(\"DOMContentLoaded\", getPosts);\ndocument.querySelector(\"#post-submit\").addEventListener(\"click\", submitPost);\ndocument.querySelector(\"#posts\").addEventListener(\"click\", deletePost);\ndocument.querySelector(\"#posts\").addEventListener(\"click\", enableEdit);\ndocument.querySelector(\".card\").addEventListener(\"click\", cancelEdit); //get post\n\nfunction getPosts() {\n  _http__WEBPACK_IMPORTED_MODULE_1__[\"http\"].get(\"http://localhost:3000/posts\").then(data => _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].showPosts(data)).catch(err => console.log(err));\n} // add post\n\n\nfunction submitPost() {\n  const title = document.querySelector(\"#title\").value;\n  const body = document.querySelector(\"#body\").value;\n  const id = document.querySelector(\"#id\").value;\n  const data = {\n    title,\n    body\n  };\n\n  if (title === \"\" || body === \"\") {\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].showAlert(\"please add post\", \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\");\n  } else {\n    if (id === \"\") {\n      //create post\n      _http__WEBPACK_IMPORTED_MODULE_1__[\"http\"].post(\"http://localhost:3000/posts\", data).then(data => {\n        _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].showAlert(\"post added\", \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\");\n        _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].clearField();\n        getPosts();\n      }).catch(err => console.log(err));\n    } else {\n      _http__WEBPACK_IMPORTED_MODULE_1__[\"http\"].put(`http://localhost:3000/posts/${id}`, data).then(data => {\n        _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].showAlert(\"post updated\", \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\");\n        _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].changeFormState(\"add\");\n        getPosts();\n      }).catch(err => console.log(err));\n    }\n  }\n} //delete post\n\n\nfunction deletePost(e) {\n  e.preventDefault();\n\n  if (e.target.classList.contains(\"delete\")) {\n    const id = e.target.dataset.id;\n\n    if (confirm(\"are you sure?\")) {\n      _http__WEBPACK_IMPORTED_MODULE_1__[\"http\"].delete(`http://localhost:3000/posts/${id}`).then(data => {\n        _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].showAlert(\"post removed\", \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\");\n        _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].clearField();\n        getPosts();\n      }).catch(err => console.log(err));\n    }\n  }\n}\n\nfunction enableEdit(e) {\n  e.preventDefault();\n\n  if (e.target.classList.contains(\"edit\")) {\n    const id = e.target.dataset.id;\n    const body = e.target.previousElementSibling.textContent;\n    const title = e.target.previousElementSibling.previousElementSibling.textContent;\n    const data = {\n      id,\n      body,\n      title\n    };\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].fillForm(data);\n  }\n}\n\nfunction cancelEdit(e) {\n  e.preventDefault();\n\n  if (e.target.classList.contains(\"cancel\")) {\n    _ui__WEBPACK_IMPORTED_MODULE_2__[\"ui\"].changeFormState(\"add\");\n  }\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/*! exports provided: http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"http\", function() { return http; });\nclass HttpModule {\n  async get(url) {\n    const response = await fetch(url);\n    const resData = await response.json();\n    return resData;\n  }\n\n  async post(url, data) {\n    const response = await fetch(url, {\n      method: \"POST\",\n      headers: {\n        \"Content-type\": \"application/json\"\n      },\n      body: JSON.stringify(data)\n    });\n    const resData = await response.json();\n    return resData;\n  }\n\n  async put(url, data) {\n    const response = await fetch(url, {\n      method: \"PUT\",\n      headers: {\n        \"Content-type\": \"application/json\"\n      },\n      body: JSON.stringify(data)\n    });\n    const resData = await response.json();\n    return resData;\n  }\n\n  async delete(url) {\n    const response = await fetch(url, {\n      method: \"DELETE\",\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    });\n    const resData = await \"data is deleted\";\n    return resData;\n  }\n\n}\n\nconst http = new HttpModule();\n\n//# sourceURL=webpack:///./src/http.js?");

/***/ }),

/***/ "./src/mymodule.js":
/*!*************************!*\
  !*** ./src/mymodule.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"Brive\",\n  email: \"abcd@gmail.com\"\n};\n\n//# sourceURL=webpack:///./src/mymodule.js?");

/***/ }),

/***/ "./src/mymodule2.js":
/*!**************************!*\
  !*** ./src/mymodule2.js ***!
  \**************************/
/*! exports provided: person2, sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"person2\", function() { return person2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return sayHello; });\nconst person2 = {\n  name: \"john\",\n  age: 30\n};\nfunction sayHello() {\n  return `hello ${person2.name}`;\n} // const greeting = \"hello world\";\n// export default greeting;\n\n//# sourceURL=webpack:///./src/mymodule2.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ui\", function() { return ui; });\nclass UI {\n  constructor() {\n    this.post = document.querySelector(\"#posts\");\n    this.titleInput = document.querySelector(\"#title\");\n    this.bodyInput = document.querySelector(\"#body\");\n    this.idInput = document.querySelector(\"#id\");\n    this.postSubmit = document.querySelector(\"#post-submit\");\n    this.formState = \"add\";\n  }\n\n  showPosts(posts) {\n    let output = \"\";\n    posts.forEach(post => {\n      output += `\n                <div class=\"mb-4 max-w-sm rounded overflow-hidden shadow-lg p-10 mt-6\">\n                    <h3>${post.title}</h3>\n                    <p>${post.body}</p>\n                    <a href=\"#\" class=\"edit text-red-700\" data-id=\"${post.id}\">edit</a>\n                    <a href=\"#\" class=\"delete text-blue-500\" data-id=\"${post.id}\">delete</a>\n                </div>\n            `;\n    });\n    this.post.innerHTML = output;\n  }\n\n  showAlert(message, className) {\n    this.clearAlert();\n    const div = document.createElement(\"div\");\n    div.classList = className;\n    div.appendChild(document.createTextNode(message));\n    const container = document.querySelector(\"#postsContainer\");\n    const posts = document.querySelector(\"#posts\");\n    container.insertBefore(div, posts);\n    setTimeout(() => {\n      this.clearAlert();\n    }, 2000);\n  }\n\n  clearAlert() {\n    const currentAlert = document.querySelector(\".bg-red-100\");\n\n    if (currentAlert) {\n      currentAlert.remove();\n    }\n  }\n\n  clearField() {\n    this.titleInput.value = \"\";\n    this.bodyInput.value = \"\";\n  }\n\n  fillForm(data) {\n    this.titleInput.value = data.title;\n    this.bodyInput.value = data.body;\n    this.idInput.value = data.id;\n    this.changeFormState(\"edit\");\n  }\n\n  clearIdInput() {\n    this.idInput.value = \"\";\n  } //change form state\n\n\n  changeFormState(type) {\n    if (type === \"edit\") {\n      this.postSubmit.textContent = \"update\";\n      this.postSubmit.className = \"bg-orange-500 mt-6 w-full text-white font-bold py-2 px-4 rounded\"; //create cancel button element\n\n      const button = document.createElement(\"button\");\n      button.className = \"cancel bg-gray-600 mt-6 w-full text-white font-bold py-2 px-4 rounded\";\n      button.appendChild(document.createTextNode(\"cancel\")); //get parent node\n\n      const card = document.querySelector(\".card\");\n      const formEnd = document.querySelector(\".form-end\");\n      card.insertBefore(button, formEnd);\n    } else {\n      this.postSubmit.textContent = \"post it\";\n      this.postSubmit.className = \"mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\"; //remove cancel button\n\n      if (document.querySelector(\".cancel\")) {\n        document.querySelector(\".cancel\").remove();\n      } //clear ID\n\n\n      this.clearIdInput(); //clear text field\n\n      this.clearField();\n    }\n  }\n\n}\n\nconst ui = new UI();\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });