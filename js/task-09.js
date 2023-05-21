function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorDescriptionRef = document.querySelector(".color");
const colorChangeButtonRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");

colorChangeButtonRef.addEventListener("click", () => {
  colorDescriptionRef.textContent = getRandomHexColor();

  bodyRef.style.backgroundColor = `${colorDescriptionRef.textContent}`;
});
