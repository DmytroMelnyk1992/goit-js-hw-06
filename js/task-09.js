function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");

const currentRandomColor = document.querySelector(".color");
currentRandomColor.textContent = body.style.background;

changeColorButton.addEventListener("click", () => {
  console.log("Button was clicked");

  document.body.style.background = getRandomHexColor();
  let i = 0;
  if (i > getRandomHexColor.length - 1) {
    i++;
  }
});
