import { Fireworks } from "fireworks-js";

const fireworksEl = document.querySelector("#fireworks");
const fireworks = new Fireworks(fireworksEl, {});
fireworks.start();

const url = new URL(window.location.href);
const Name = url.searchParams.get("name");

window.document.title = "Greeting By " + Name;
console.log(Name);
if (Name) {
  let userName = document.querySelector("#greeternameid");
  userName.textContent = Name;
} else {
  window.location.href = "/festival-greeting-app";
}
