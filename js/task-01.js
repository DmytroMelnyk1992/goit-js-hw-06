const childNodesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ` + childNodesEl.length);
console.log(" ");
for (let element of childNodesEl) {
  const categoryTitle = element.firstElementChild.textContent;
  const categoryElement = element.lastElementChild.querySelectorAll("li");
  console.log(`Category: ` + categoryTitle);
  console.log(`Elements: ` + categoryElement.length);
  console.log(" ");
}
