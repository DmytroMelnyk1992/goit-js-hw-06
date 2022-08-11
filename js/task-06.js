// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

let inputValue = document.querySelector("#validation-input");

let totalLenght = inputValue.getAttribute("data-length");
let parsedTotalLength = parseInt(totalLenght, 10);

inputValue.oninput = function () {
  if (inputValue.value.length === parsedTotalLength) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  }
  if (inputValue.value.length === 0) {
    inputValue.classList.remove("valid");
    inputValue.classList.remove("invalid");
  }
  if (
    inputValue.value.length !== parsedTotalLength &&
    inputValue.value.length !== 0
  ) {
    inputValue.classList.add("invalid");
  }
};
