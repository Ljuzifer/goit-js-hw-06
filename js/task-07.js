const inputFontSizeControl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

inputFontSizeControl.addEventListener("input", () => {
  console.log(inputFontSizeControl.value);
  textFontSize.style.fontSize = `${inputFontSizeControl.value}px`;
});
