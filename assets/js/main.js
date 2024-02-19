const form = document.querySelector("form#greeterName");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.dir(e.target[0].value);
  const greeterName = e.target[0].value;
  //   console.log("Submitted");
  window.location.href =
    "/festival-greeting-app/greeting.html?name=" + greeterName;
});
