import { list } from "./data.js";

let countries;
let filter = document.getElementById("filter");
const ul = document.querySelector("#countries");

filter.addEventListener("keyup", filterCountries);
document.addEventListener("DOMContentLoaded", displayCountries);


function displayCountries() {
  list.forEach(item => {
    const li = document.createElement("li");
    li.className = "collection-header letter";
    li.innerHTML = `<h5>${item.letter}</h5>`;
    ul.appendChild(li);
    countries = item.countries;

    countries.forEach(country => {
      const nextli = document.createElement("a");
      nextli.className = "collection-item avatar";
      nextli.innerHTML = `
    <img  src="${country.img}" class="circle" style="border-radius:0px">
    <span class="title orange-text"><b>${country.name}</b></span>
      <p class="teal-text"> ${country.fact}</p>
      `;
      ul.appendChild(nextli);
    });
  });
}

function filterCountries() {
  let country; 
  let filterValue = filter.value.toUpperCase();
  if(filterValue==''){
    let li = document.querySelectorAll('li');
    li.forEach(item =>item.style.display='');
  }
  let li = ul.querySelectorAll(".collection-item");
  let header =  ul.querySelectorAll(".collection-header");
  console.log(header);
  li.forEach(item => {
    country = item.querySelector('.title').innerText.toUpperCase();
    if(country.indexOf(filterValue) > -1 ){
         item.style.display=''; 
    }else{
      item.style.display='none'; 
      header.forEach((letter)=>letter.style.display='none')
    }
  });
}
