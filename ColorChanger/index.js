const input = document.querySelector("#inputColor");
const btn = document.querySelector("#insert");
const btn2 = document.querySelector("#reset");

btn.addEventListener("click", () => {
  const value = input.value;
  document.body.style.background = value;
});
btn2.addEventListener("click", () => {
  input.value = "";
  document.body.style.backgroundColor = "white";
});
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 46) {
    event.preventDefault();
    btn2.click();
  }
});
