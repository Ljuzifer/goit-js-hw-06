let counterValue = 0;

const buttonsRef = document.querySelectorAll("#counter button");

const valueRef = document.querySelector("#value");

buttonsRef[0].addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
  return counterValue;
});

buttonsRef[1].addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  return counterValue;
});
