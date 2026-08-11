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

let params = new URLSearchParams(window.location.search);

let recipeId = params.get("id");
let recipeElement = document.getElementById("recipe");
// let btnBack = document.getElementById("btnBack");
// btnBack.textContent = "Go back"

let holderTags = document.getElementById("holderTags");
let recipe = document.getElementById("recipe");
let divRecips = document.getElementById("divRecips");

fetch("https://dummyjson.com/recipes/" + recipeId)
  .then((response) => response.json())
  .then(function (data) {
    let recipeName = document.createElement("h1");
    recipeName.textContent = data.name;

    recipeElement.appendChild(recipeName);
  });

console.log(recipeId.name);

async function getTags() {
  let tags = await fetchData("https://dummyjson.com/recipes/tags");
  console.log(tags);

  buildRecipes(tags);
}
getTags();

holderTags.addEventListener("change", async function () {
  let catcheTag = await fetchData(
    `https://dummyjson.com/recipes/tag/${this.value}`,
  );

  divRecips.textContent = "";

  appendCookingRecipe(catcheTag.recipes);
});

function appendCookingRecipe(arrayRecipes) {
  for (let recipe of arrayRecipes) {
    let recipeTitle = document.createElement("h2");
    let pCuisine = document.createElement("p");
    let ingredients = buildIngredients(recipe.ingredients);

    recipeTitle.textContent = recipe.name;
    pCuisine.textContent = `Cuisine: ${recipe.cuisine}`;

    divRecips.append(recipeTitle, pCuisine, ingredients);
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

function buildRecipes(arrayTags) {
  for (let tag of arrayTags) {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    holderTags.appendChild(option);
  }
}

btnBack.addEventListener("click", function () {
  window.history.back();
});
