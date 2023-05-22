let counterValue = 0;

const btnIncrement = document.querySelector("[data-action = increment]");
const btnDecrement = document.querySelector("[data-action = decrement]");
const valueRef = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
