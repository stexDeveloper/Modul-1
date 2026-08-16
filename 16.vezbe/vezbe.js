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

function createHTMLElement(element, content, append) {
  element.textContent = content;
  return append.appendChild(element);
}

// 1. Koristi JSONPlaceholder API (/users) – fetch-uj sve korisnike i ispiši njihova imena u konzolu.
async function getUsers() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) console.log(`Name of the user: ${user.name}`);
}
getUsers();

// 2. Koristi JSONPlaceholder API (/posts) – fetch-uj postove i prikaži naslove u <ul>.
let showTitle = document.getElementById("showTitle");
async function getPosts() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  for (let post of posts) {
    let li = document.createElement("li");
    li.textContent = post.title;
    showTitle.appendChild(li);
  }
}
getPosts();

// 3. Koristi JSONPlaceholder API (/todos) – fetch-uj sve zadatke i prikaži samo završene (completed = true) u listi.
let showCompletedTodos = document.getElementById("showCompletedTodos");
async function getTodos() {
  let todos = await fetchData("https://jsonplaceholder.typicode.com/todos");

  for (let todo of todos) {
    let li = document.createElement("li");
    if (todo.completed === true)
      createHTMLElement(
        li,
        `ID ${todo.id} has completed a task `,
        showCompletedTodos,
      );
  }
}
getTodos();

// 4. Koristi DummyJSON API (/products) – fetch-uj proizvode i prikaži samo one čija je cena > 500 u <ul>.
let showPriceProducts = document.getElementById("showPriceProducts");
async function getProducts() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    let li = document.createElement("li");

    if (product.price > 500) {
      createHTMLElement(
        li,
        `Product title: ${product.brand}, his price is: $${product.price}`,
        showPriceProducts,
      );
    }
  }
}
getProducts();

// 5. Koristi DummyJSON API – fetch-uj proizvode i dodaj <div> sa nazivom i cenom svakog proizvoda.
let productsPriceName = document.getElementById("productsPriceName");
async function getProductsNamePrice() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    createHTMLElement(h1, `Product name ${product.brand}`, productsPriceName);
    createHTMLElement(p, `Product price $${product.price}`, productsPriceName);
    div.appendChild(h1);
    div.appendChild(p);
    productsPriceName.appendChild(div);
  }
}
getProductsNamePrice();

// 6. Koristi PokeAPI (/pokemon?limit=10) – fetch-uj prvih 10 Pokémon-a i prikaži imena u <ul>.
let pokemonNames = document.getElementById("pokemonNames");
async function getPokeNames() {
  let pokemons = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=10");

  for (let pokemon of pokemons.results) {
    let li = document.createElement("li");
    createHTMLElement(li, `Pokemon name: ${pokemon.name}`, pokemonNames);
  }
}
getPokeNames();

// 7. Koristi PokeAPI – fetch-uj jednog Pokémon-a po imenu i prikaži height i weight u <p>.
let pokemonContainer = document.getElementById("pokemonContainer");
async function getPokeHeightWeight() {
  let pokemons = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=10");

  for (let pokemon of pokemons.results) {
    let pokeUrl = await fetchData(pokemon.url);
    let p = document.createElement("p");

    createHTMLElement(
      p,
      `Pokemon height is: ${pokeUrl.height}, weight: ${pokeUrl.weight}`,
      pokemonContainer,
    );
  }
}
getPokeHeightWeight();

// 8. Koristi The Cat API (/breeds) – fetch-uj sve rase mačaka i prikaži njihova imena u <ul>.
let catBreedsUl = document.getElementById("catBreedsUl");
async function getCatBreeds() {
  let catBreeds = await fetchData("https://catfact.ninja/breeds");

  for (let cat of catBreeds.data) {
    let li = document.createElement("li");

    createHTMLElement(li, `Name of the cat breed: ${cat.breed}`, catBreedsUl);
  }
}
getCatBreeds();

// 9. Koristi The Cat API – fetch-uj rase i dodaj <p> samo za rase sa affection_level >= 4.

// catAPI nije u funkciji trenutno

// 10. Koristi The Cat API – fetch-uj rase i napravi <select> dropdown sa imenima rasa.

// catAPI nije u funkciji trenutno

// 11. Koristi JSONPlaceholder API – fetch-uj 5 korisnika i dodaj <p> sa "Ime: X, Email: Y" u <div>.
let usersNamesEmails = document.getElementById("usersNamesEmails");
async function getUsersNamesEmail() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) {
    let p = document.createElement("p");
    createHTMLElement(
      p,
      `User name: ${user.name}, email: ${user.email}`,
      usersNamesEmails,
    );
  }
}
getUsersNamesEmail();

// 12. Koristi JSONPlaceholder API – fetch-uj postove i prikaži samo one čiji naslov sadrži reč "qui" u <ul>.
let postsUl = document.getElementById("postsUl");
async function getPostsQui() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  for (let post of posts) {
    let li = document.createElement("li");

    if (post.title.includes("qui")) createHTMLElement(li, post.title, postsUl);
  }
}
getPostsQui();

// 13. Koristi DummyJSON API – fetch-uj proizvode i prikaži prosečnu cenu u <p>.
let averageProductPrice = document.getElementById("averageProductPrice");
async function getProductsAvgPrice() {
  let products = await fetchData("https://dummyjson.com/products");
  let avgPrice = 0;
  let p = document.createElement("p");

  for (let product of products.products) avgPrice += product.price;

  createHTMLElement(
    p,
    `Average price of all products is: ${(avgPrice / products.products.length).toFixed(2)}`,
    averageProductPrice,
  );
}
getProductsAvgPrice();

// 14. Koristi DummyJSON API – fetch-uj proizvode i dodaj <div> sa nazivom i cenom samo za proizvode čije ime počinje slovom "S".
let productsStartsWithS = document.getElementById("productsStartsWithS");
async function getProductsNameS() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    if (product.title.toLowerCase().startsWith("b")) {
      let h1 = document.createElement("h1");
      let p = document.createElement("p");

      createHTMLElement(
        h1,
        `Product name ${product.title}`,
        productsStartsWithS,
      );
      createHTMLElement(
        p,
        `Product price $${product.price}`,
        productsStartsWithS,
      );
    }
    console.log(product.title);
  }
}
getProductsNameS();

// 15. Koristi PokeAPI – fetch-uj Pokémon-e i prikaži samo one sa base_experience > 50.
let pokemonBaseExperience = document.getElementById("pokemonBaseExperience");
async function getBaseExperiencePokemons() {
  let pokemons = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=100");

  for (let pokemon of pokemons.results) {
    let pokeBaseExperience = await fetchData(pokemon.url);
    let li = document.createElement("li");

    if (pokeBaseExperience.base_experience > 200)
      createHTMLElement(
        li,
        `Pokemon name: ${pokeBaseExperience.name.toUpperCase()}, base expereince is: ${pokeBaseExperience.base_experience}`,
        pokemonBaseExperience,
      );
  }
}
getBaseExperiencePokemons();

// 16. Koristi JSONPlaceholder API – fetch-uj korisnike i napravi dropdown (<select>) sa njihovim imenima.
let userNames = document.getElementById("userNames");
async function getUserName() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) {
    let option = document.createElement("option");

    createHTMLElement(option, user.name, userNames);
  }
}
getUserName();

// 17. Koristi The Cat API – fetch-uj sve rase i dodaj <p> sa "Ime: X, Temperament: Y" samo za rase koje imaju "Intelligent" u temperamentu.

// catAPI nije u funkciji trenutno

// 18. Koristi DummyJSON API – fetch-uj proizvode i prikaži u <ul> samo proizvode sa rating >= 4.
let productsRatings = document.getElementById("productsRatings");
async function getProductsRatings() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    let li = document.createElement("li");

    if (product.rating >= 4)
      createHTMLElement(
        li,
        `Products: ${product.title}, and rating is: ${product.rating}`,
        productsRatings,
      );
  }
}
getProductsRatings();

// 19. Koristi PokeAPI – fetch-uj prvih 10 Pokémon-a i prikaži name i prvi tip (types[0].type.name) u <div> elementima.
let pokeNameType = document.getElementById("pokeNameType");
async function getPokemonTypeName(params) {
  let pokemons = await fetchData("https://pokeapi.co/api/v2/pokemon");

  for (let pokemon of pokemons.results) {
    let pokemonUrl = await fetchData(pokemon.url);
    let li = document.createElement("li");

    createHTMLElement(
      li,
      `Pokemon name: ${pokemon.name}, and the type is: ${pokemonUrl.types[0].type.name}`,
      pokeNameType,
    );
  }
}
getPokemonTypeName();

// 20. Koristi JSONPlaceholder API – fetch-uj postove i dodaj <div> sa naslovom i prvim 20 karaktera body za svaki post.
let firstLetterPosts = document.getElementById("firstLetterPosts");
async function getFirstLetterPosts() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  for (let post of posts) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    createHTMLElement(h1, post.title, div);
    createHTMLElement(p, post.body.slice(0, 19), div);

    firstLetterPosts.appendChild(div);
  }
}
getFirstLetterPosts();

// 21. Koristi The Cat API – fetch-uj rase i prikaži samo one čiji life_span >= 15 godina u <ul>.

// catAPI nije u funkciji trenutno

// 22. Koristi DummyJSON API – fetch-uj proizvode i dodaj <li> za svaki proizvod sa "Naziv: X, Cena: Y".
let productsNamePrice = document.getElementById("productsNamePrice");
async function getProductsNamePrice() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    let li = document.createElement("li");
    createHTMLElement(
      li,
      `Products name: ${product.title}, and price is: $${product.price}`,
      productsNamePrice,
    );
  }
}
getProductsNamePrice();

// 23. Koristi PokeAPI – fetch-uj jednog Pokémon-a po imenu i prikaži u <div> ime, visinu i težinu.
let pokeNameHeightWeight = document.getElementById("pokeNameHeightWeight");
async function getPokeHeightWeightName() {
  let pokemons = await fetchData("https://pokeapi.co/api/v2/pokemon");

  for (let pokemon of pokemons.results) {
    let pokeUrl = await fetchData(pokemon.url);
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");

    createHTMLElement(h4, `Pokemon name: ${pokemon.name.toUpperCase()}`, div);
    createHTMLElement(
      p,
      `Pokemon height: ${pokeUrl.height}, weight: ${pokeUrl.weight}`,
      div,
    );

    pokeNameHeightWeight.appendChild(div);
  }
}
getPokeHeightWeightName();

// 24. Koristi JSONPlaceholder API – fetch-uj korisnike i ispiši samo one čiji grad (address.city) počinje slovom "S" u <ul>.
let cityOfUsers = document.getElementById("cityOfUsers");
async function getUsersCity() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) {
    let li = document.createElement("li");

    if (user.address.city.startsWith("S"))
      createHTMLElement(
        li,
        `User name: ${user.name}, and address is: ${user.address.city}`,
        cityOfUsers,
      );
  }
}
getUsersCity();

// 25. Koristi The Cat API – fetch-uj rase i napravi <ul> sa imenom i temperamentu samo za rase sa adaptability >= 5.

// catAPI nije u funkciji trenutno
