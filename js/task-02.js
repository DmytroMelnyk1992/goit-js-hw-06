const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const rootElement = document.querySelector("#ingredients");

const firstElementLi = document.createElement("li");
firstElementLi.classList.add("item");

firstElementLi.textContent = ingredients[0];

rootElement.append(firstElementLi);

ingredients.map((element, index, ingredients) => {
  if (index !== 0) {
    let nextElementLi = document.createElement("li");
    nextElementLi.classList.add("item");
    nextElementLi.textContent = element;
    rootElement.append(nextElementLi);
  }
});
