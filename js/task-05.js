const fieldInputRef = document.querySelector("#name-input");
const fieldOutputRef = document.querySelector("#name-output");

fieldInputRef.addEventListener("input", onInputValueField);

function onInputValueField(event) {
  event.preventDefault;

  fieldOutputRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    fieldOutputRef.textContent = "Anonymous";
  }
}
