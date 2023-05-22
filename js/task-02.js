const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const listRef = document.createElement("li");
  listRef.classList.add("item");
  listRef.textContent = el;

  return listRef;
});

ingredientsRef.append(...elements);
