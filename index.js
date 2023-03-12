const btn1 = document.querySelector(".decrement");
const btn2 = document.querySelector(".increment");
const num = document.querySelector("#counter");

btn1.addEventListener("click", () => {
  num.innerText =  +num.textContent - 1;
});
btn2.addEventListener("click", () => {
  num.innerText =  +num.textContent + 1;
});
