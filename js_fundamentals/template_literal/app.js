const name = "john";
const age = 30;
const job = "full stack developer";
const city = "san francisco";

//without template literal
html = "<ul><li>Name:" + name + "</li ></ul>";

//with template literal
html_temp = `
<ul>
<li>Name: ${name}</li>
<li>age: ${age}</li>
<li>Job: ${job}</li>
<li>city: ${city}</li>
<li>checkAge:${age > 20 ? "over 20" : "under 20"}
</ul>
`;
document.body.innerHTML = html_temp;
