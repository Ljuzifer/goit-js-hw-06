const fieldInputRef = document.querySelector("#name-input");
const fieldOutputRef = document.querySelector("#name-output");

fieldInputRef.addEventListener("input", onInputValueField);

function onInputValueField(event) {
  event.preventDefault;
  console.log(event.currentTarget.value);
  fieldOutputRef.textContent = event.currentTarget.value;
}
