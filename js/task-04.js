let counterValue = 0;

const button = {
  subtract: document.querySelector("[data-action='increment']"),
  addition: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

const increment = () => {
  counterValue += 1;

  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

button.subtract.addEventListener("click", increment);
button.addition.addEventListener("click", decrement);
