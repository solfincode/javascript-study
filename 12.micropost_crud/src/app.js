//commonJS module
const person = require("./mymodule");
//es2015 module
// import { person2, sayHello } from "./mymodule2";
import * as mod from "./mymodule2";

console.log("CommonJs", person.name);
console.log("es2015", mod.person2.name);
console.log(mod.sayHello());
