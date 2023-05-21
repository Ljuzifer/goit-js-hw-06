const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", onAddBorderColor);

function onAddBorderColor(event) {
  event.currentTarget.value.length === 6
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");

  inputRef.addEventListener("focus", () => {
    inputRef.classList.remove("valid", "invalid");
  });
}
