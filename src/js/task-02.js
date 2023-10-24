const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

document.addEventListener("DOMContentLoaded", function () {
  const ingredientsList = document.getElementById("ingredients");

  ingredients.forEach(function (ingredient) {
    const listItem = document.createElement("li");

    listItem.textContent = ingredient;

    listItem.classList.add("item");

    ingredientsList.appendChild(listItem);
  });
});
