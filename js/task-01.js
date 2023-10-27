const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const numberOfCategories = categoryItems.length;

console.log(`Number of categoris: ${numberOfCategories}`);

categoryItems.forEach((category, index) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const articlesList = category.querySelectorAll("ul > li");

  const numberOfArticles = articlesList.length;

  console.log(
    `Category ${index + 1}: ${categoryTitle} - Elements: ${numberOfArticles}`
  );
});
