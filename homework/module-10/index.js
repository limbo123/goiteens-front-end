// imports/requires
import menu from "./menu.json";
import menuItem from "./templates/index.hbs";
// Refs
const ul_menu = document.querySelector(".js-menu");
const checkbox = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body");
// Code

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};



const savedValue = localStorage.getItem("Theme");

if (savedValue) {
  body.classList.value = JSON.parse(savedValue);
}

checkbox.addEventListener("change", () => {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  localStorage.setItem("Theme", JSON.stringify(body.classList.value));
});

ul_menu.insertAdjacentHTML("beforeend", menuItem(menu));

if(body.classList.value === Theme.DARK){
  checkbox.checked = true;
}