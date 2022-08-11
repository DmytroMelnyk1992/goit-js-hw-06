// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const controlFont = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

controlFont.oninput = function () {
  text.style.fontSize = controlFont.value + "px";
};
