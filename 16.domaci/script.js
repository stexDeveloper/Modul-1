async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Greška: ${response.status}`);
    }

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

let tagsHolder = document.getElementById("tagsHolder");
let divRecips = document.getElementById("divRecips");

async function displayRecipes() {
  let recipesData = await fetchData(
    "https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc",
  );

  console.log(recipesData);

  appendCookingRecipe(recipesData.recipes);
}

async function displayRecipesNames() {
  let recipesData = await fetchData("https://dummyjson.com/recipes/tags");

  buildRecipes(recipesData);

  console.log(recipesData);
}

tagsHolder.addEventListener("change", async function () {
  let catchedTag = await fetchData(
    `https://dummyjson.com/recipes/tag/${this.value}`,
  );

  divRecips.textContent = "";

  appendCookingRecipe(catchedTag.recipes);
});

function appendCookingRecipe(arrayRecipes) {
  for (let recipe of arrayRecipes) {
    let recipeTitle = document.createElement("h2");
    let pCuisine = document.createElement("p");
    let ingredients = buildIngredients(recipe.ingredients);
    let permalinkElement = document.createElement("a");

    recipeTitle.textContent = recipe.name;
    pCuisine.textContent = `Cuisine: ${recipe.cuisine}`;

    permalinkElement.textContent = "Show recipe";
    permalinkElement.href = `permalink.html?id=${recipe.id}`;
    // permalinkElement.target = "_blank";

    divRecips.append(recipeTitle, pCuisine, ingredients, permalinkElement);
  }
}

function buildIngredients(arrayIngredients) {
  let ulIngredients = document.createElement("ul");

  for (let ingredient of arrayIngredients) {
    let li = document.createElement("li");

    li.textContent = ingredient;

    ulIngredients.appendChild(li);
  }

  return ulIngredients;
}

function buildRecipes(recipesArray) {
  for (let optionRecipe of recipesArray) {
    let option = document.createElement("option");

    option.value = optionRecipe;
    option.textContent = optionRecipe;

    tagsHolder.appendChild(option);
  }
}

displayRecipes();
displayRecipesNames();
