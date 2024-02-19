const form = document.querySelector("form#greeterName");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const greeterName = e.target[0].value;
  console.log("Submitted");
  window.location.href =
    "/festival-greeting-app/greeting.html?name=" + greeterName;
});
