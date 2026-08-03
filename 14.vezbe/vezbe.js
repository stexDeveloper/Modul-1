/*
====================================================
VEŽBA 1
====================================================

Zadatak:
- Koristi JSONPlaceholder API:
  https://jsonplaceholder.typicode.com/users

Potrebno je:
- Fetch-ovati sve korisnike.
- Ispisati njihova imena u konzolu.
*/
[
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

async function getUsers() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) console.log(user.name);
}
getUsers();
/*
====================================================
VEŽBA 2
====================================================

Zadatak:
- Koristi JSONPlaceholder API:
  https://jsonplaceholder.typicode.com/posts

Potrebno je:
- Fetch-ovati sve postove.
- Prikazati title svakog posta u <ul> listi.
*/
let liTitle = document.getElementById("liTitle");
async function getPosts() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  for (let post of posts) {
    let li = document.createElement("li");
    li.textContent = post.title;
    liTitle.appendChild(li);
  }
}
getPosts();
/*
====================================================
VEŽBA 3
====================================================

Zadatak:
- Koristi DummyJSON API:
  https://dummyjson.com/products

Potrebno je:
- Fetch-ovati sve proizvode.
- Prikazati nazive proizvoda u <div>.
- Koristiti createElement().
*/
let divProducts = document.getElementById("products");
async function getProducts() {
  let products = await fetchData("https://dummyjson.com/products");
  let productsName = products.products;
  // console.log(productsName)
  for (let product of productsName) {
    divProducts.innerHTML += `<p>${product.title}</p>`;
  }
}
getProducts();
/*
====================================================
VEŽBA 4
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati jednog korisnika po ID-u.
- Ispisati njegov email u konzolu.
*/
// let enterUserID = parseInt(prompt("Enter user id: 1 - 10"));
async function getUserID() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let id of users) {
    if (enterUserID === id.id) console.log(id.email);
    else `Please enter a correct numberq`;
  }

  // console.log(users);
}
// getUserID();
/*
====================================================
VEŽBA 5
====================================================

Zadatak:
- Koristi JSONPlaceholder API:
  /todos

Potrebno je:
- Fetch-ovati sve TODO zadatke.
- Prikazati samo one koji imaju completed = true.
*/
async function getTodo() {
  let todos = await fetchData("https://jsonplaceholder.typicode.com/todos");

  for (let todo of todos) {
    if (todo.completed === true) console.log(todo);
  }
}
getTodo();
/*
====================================================
VEŽBA 6
====================================================

Zadatak:
- Koristi PokeAPI:
  https://pokeapi.co/api/v2/pokemon?limit=10

Potrebno je:
- Fetch-ovati prvih 10 Pokémona.
- Prikazati njihova imena u <ul> listi.
*/
let ulPokemon = document.getElementById("ulPokemon");
async function getPokemon() {
  let pokemon = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=10");
  let resultsPokemon = pokemon.results;

  for (let poke of resultsPokemon) {
    let li = document.createElement("li");
    li.innerHTML = poke.name;
    ulPokemon.appendChild(li);
  }
}
getPokemon();
/*
====================================================
VEŽBA 7
====================================================

Zadatak:
- Koristi PokeAPI.

Potrebno je:
- Fetch-ovati jednog Pokémona po imenu.
- Prikazati njegov height i weight u <p> elementu.
*/

async function getOnePokemon() {
  let pokemon = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=10");
  let p = document.getElementById("onePokemon");
  let resultsPokemon = pokemon.results;
  let userPokemon = "Bulbasaur";
  for (let pokemon of resultsPokemon) {
    if (userPokemon.toLowerCase() === pokemon.name) {
      p.innerHTML = userPokemon;
    }
  }
}
getOnePokemon();
/*
====================================================
VEŽBA 8
====================================================

Zadatak:
- Koristi DummyJSON API.

Potrebno je:
- Fetch-ovati sve proizvode.
- Prikazati samo proizvode čija je cena veća od 500.
- Rezultat prikazati u <ul> listi.
*/
let productsOver500 = document.getElementById("productsOver500");
async function getProductPrice() {
  let products = await fetchData("https://dummyjson.com/products");
  let arrayProducts = products.products;

  for (let product of arrayProducts) {
    if (product.price > 500) {
      let li = document.createElement("li");
      li.innerHTML = product.price;
      productsOver500.appendChild(li);
    }
  }
}
getProductPrice();
/*
====================================================
VEŽBA 9
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati sve korisnike.
- Prikazati samo korisnike čija adresa sadrži "Suite".
- Rezultat prikazati u <ul> listi.
*/
let userUl = document.getElementById("userUl");
async function getUserAddress() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) {
    if (user.address.suite.includes("Suite")) {
      let li = document.createElement("li");

      li.innerHTML = user.name;
      userUl.appendChild(li);
    }
  }
  // console.log(users);
}
getUserAddress();
/*
====================================================
VEŽBA 10
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati sve postove.
- Prikazati samo postove čiji title sadrži reč "qui".
- Rezultat prikazati u <ul> listi.
*/
let ulQui = document.getElementById("ulQui");
async function getAllPosts() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  for (let post of posts) {
    if (post.title.includes("qui")) {
      let li = document.createElement("li");
      li.innerHTML = post.title;
      ulQui.appendChild(li);
    }
  }
}
getAllPosts();
/*
====================================================
VEŽBA 11
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati prvih 5 korisnika.
- U <div id="users"></div> dodati <p> element za svakog korisnika.
- Tekst treba da bude:
  "Ime: X, Email: Y"
*/
let usersDiv = document.getElementById("usersDiv");
async function getFirst5Users() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");
  for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    p.innerHTML = `Ime: ${users[i].name}, Email: ${users[i].email}`;
    usersDiv.appendChild(p);
  }
}
getFirst5Users();
/*
====================================================
VEŽBA 12
====================================================

Zadatak:
- Koristi JSONPlaceholder API:
  /todos

Potrebno je:
- Fetch-ovati sve TODO zadatke.
- Dodati <li> element za svaki zadatak.
- Ako je completed = true, dodati klasu "completed".
*/
let ulCompletedTodos = document.getElementById("ulCompletedTodos");
async function getCompletedTodos() {
  let todos = await fetchData("https://jsonplaceholder.typicode.com/todos");
  for (let todo of todos) {
    if (todo.completed) {
      let li = document.createElement("li");
      li.classList.add("completed");
      li.innerHTML = todo.userId;
      ulCompletedTodos.appendChild(li);
    }
  }
}
getCompletedTodos();
/*
====================================================
VEŽBA 13
====================================================

Zadatak:
- Koristi DummyJSON API.

Potrebno je:
- Fetch-ovati sve proizvode.
- Izračunati prosečnu cenu proizvoda.
- Prikazati rezultat u:
  <p id="avgPrice"></p>
*/
let avgPrice = document.getElementById("avgPrice");
async function getAvgPrice() {
  let products = await fetchData("https://dummyjson.com/products");
  let listOfProducts = products.products;
  let sum = 0;

  for (let product of listOfProducts) sum += product.price;

  let average = sum / listOfProducts.length;
  avgPrice.innerHTML = average;
}
getAvgPrice();
/*
====================================================
VEŽBA 14
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati sve postove.
- Prikazati samo prve 3 reči title-a.
- Svaki rezultat prikazati u <li> elementu.
*/
let ulFirstTreeLetters = document.getElementById("ulFirstTreeLetters");
async function getUlFirstTreeLetters() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  console.log();

  for (let i = 0; i < posts.length; i++) {
    let li = document.createElement("li");
    let treeLetters = posts[i].title
      .split(" ")[0]
      .split("")
      .slice(0, 3)
      .join("");
    if (treeLetters.length === 3) {
      li.innerHTML = treeLetters;
      ulFirstTreeLetters.appendChild(li);
    }
  }
}
getUlFirstTreeLetters();
/*
====================================================
VEŽBA 15
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati sve korisnike.
- Prebrojati koliko korisnika ima ime duže od 5 karaktera.
- Rezultat ispisati u <p> elementu.
*/
let divUsers = document.getElementById("divUsers");

async function getUsersCharacters() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) {
    let name = user.name.split(" ")[0].split("").length;

    if (name >= 5) {
      let p = document.createElement("p");
      p.innerHTML = user.name;
      divUsers.appendChild(p);
    }
  }
}
getUsersCharacters();
/*
====================================================
VEŽBA 16
====================================================

Zadatak:
- Koristi PokeAPI.

Potrebno je:
- Fetch-ovati Pokémone.
- Prikazati samo one čiji je base_experience veći od 200.
*/
async function getPokeBaseExp() {
  let pokemonList = await fetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=100",
  );

  for (let pokemon of pokemonList.results) {
    let pokemonDetails = await fetchData(pokemon.url);

    if (pokemonDetails.base_experience > 200)
      console.log(
        `Name of the Pokemon: ${pokemonDetails.name}, and his base experience is : ${pokemonDetails.base_experience}`,
      );
  }
}
getPokeBaseExp();
/*
====================================================
VEŽBA 17
====================================================

Zadatak:
- Koristi DummyJSON API.

Potrebno je:
- Fetch-ovati proizvode.
- Prikazati naziv i cenu svakog proizvoda u <div>.
- Tekst stilizovati plavom bojom.
*/
let divProducts2 = document.getElementById("divProducts2");

async function getProductsColor() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    let p = document.createElement("p");
    p.innerHTML = `Name of product is: ${product.title}, and the price is: $${product.price}`;

    divProducts2.appendChild(p);
  }
}
getProductsColor();
/*
====================================================
VEŽBA 18
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati korisnike.
- Napraviti <select> element.
- Dodati <option> za svakog korisnika sa njegovim imenom.
*/
let userSelect = document.getElementById("userSelect");

async function getUserSelect() {
  let users = await fetchData("https://jsonplaceholder.typicode.com/users");

  for (let user of users) {
    let option = document.createElement("option");
    option.innerHTML = user.name;
    userSelect.appendChild(option);
  }
}
getUserSelect();
/*
====================================================
VEŽBA 19
====================================================

Zadatak:
- Koristi JSONPlaceholder API.

Potrebno je:
- Fetch-ovati sve postove.
- Za svaki post napraviti <div>.
- Prikazati:
  - naslov posta,
  - prvih 20 karaktera body teksta.
*/
async function getPostsDiv() {
  let posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  for (let i = 0; i < posts.length; i++) {
    let characterPostsDiv = document.createElement("div");
    let h2CharacterPosts = document.createElement("h2");
    let postFirst20Characters = posts[i].body.split("").slice(0, 20).join("");
    h2CharacterPosts.innerHTML = postFirst20Characters;
    characterPostsDiv.appendChild(h2CharacterPosts);
    document.body.appendChild(characterPostsDiv);
  }
}
getPostsDiv();
/*
====================================================
VEŽBA 20
====================================================

Zadatak:
- Koristi DummyJSON API.

Potrebno je:
- Fetch-ovati sve proizvode.
- Prikazati samo proizvode čiji naziv počinje slovom "S".
- Rezultat prikazati u <ul> listi.
*/
let ulWithS = document.getElementById("ulWithS");
async function getProductS() {
  let products = await fetchData("https://dummyjson.com/products");

  for (let product of products.products) {
    let li = document.createElement("li");
    let productWithS = product.title.split("")[0].toLowerCase();
    if (productWithS === "g") {
      li.innerHTML = product.title;
      ulWithS.appendChild(li);
    }
  }
  console.log(products.products);
}
getProductS();
