const refs = {
  numberFieldRef: document.querySelector("#controls input"),
  createButtonRef: document.querySelector("[data-create]"),
  destroyButtonRef: document.querySelector("[data-destroy]"),
  boxElementsRef: document.querySelector("#boxes"),
};

refs.createButtonRef.addEventListener("click", () => {
  const amount = refs.numberFieldRef.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyButtonRef.addEventListener("click", () => {
  refs.boxElementsRef.innerHTML = "";
  refs.numberFieldRef.value = "";
  newBoxes.length = 0;
  // console.clear();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newBoxes = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");

    box.style.width = 30 + 10 * (newBoxes.length - 1) + 10 + 10 + "px";
    box.style.height = box.style.width;
    box.style.marginTop = 4 + "px";
    box.style.backgroundColor = getRandomHexColor();

    newBoxes.push(box);
    // console.log(box);
  }

  refs.boxElementsRef.append(...newBoxes);
}

// Another method, BUT append refers to the document is often

// function createBoxes(amount) {
//   const newBoxes = [];

//   for (let i = 0; i < amount; i += 1) {
//     let box = document.createElement("div");

//     box.style.width =
//       30 + 10 * (refs.boxElementsRef.childElementCount - 1) + 10 + "px";
//     box.style.height = box.style.width;
//     box.style.marginTop = 4 + "px";
//     box.style.backgroundColor = getRandomHexColor();

//     newBoxes.push(box);
//     refs.boxElementsRef.append(...newBoxes);
//   }
// }
