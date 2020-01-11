const name = "Alfred";
const age = 30;
const job = "Web Developer";
const city = "NYC";
let html;

//Without Template strings ES5

html =
    "<ul><li> Name " +
    name +
    " </li><li> Age : " +
    age +
    "</li><li> Job : " +
    job +
    "</li><li> City: " +
    city +
    "</li></ul>";
document.body.innerHTML = html;

//with template strings ES6
html = `
<ul>
   <li> Name:  ${Name} </li>
   <li> Age:  ${age} </li>
   <li> Job: ${job} </li>
   <li> City: ${city} </li>
   <li> City: ${2+2} </li>
   <li> City: ${age >30 ? 'Over 30': 'Under 30'} </li>
</ul>
`;


document.body.innerHTML = html;