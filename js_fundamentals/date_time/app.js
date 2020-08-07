const today = new Date();
let birthdate = new Date("1995-12-17T03:24:00");
console.log("today:", today);
console.log("birthdate:", birthdate);

console.log("month:", birthdate.getMonth());
console.log("date:", birthdate.getDate());
console.log("day:", birthdate.getDay());
console.log("year::", birthdate.getFullYear());

birthdate.setMonth(2);
birthdate.setFullYear(2000);
console.log("after setMonth:", birthdate);
