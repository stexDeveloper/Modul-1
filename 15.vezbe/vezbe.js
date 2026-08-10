// ===============================
// VEŽBA 1
// Koristi The Cat API.
// Fetch-uj sve rase mačaka i prikaži njihova imena (name) u <ul>.
// ===============================
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

let catBreedsName = document.getElementById("catBreedsName");
async function displayCatBreeds() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    let li = document.createElement("li");
    li.textContent = breed.name;
    catBreedsName.appendChild(li);
  }
}
displayCatBreeds();
// ===============================
// VEŽBA 2
// Koristi The Cat API.
// Fetch-uj sve rase i prikaži težinu (weight.metric)
// i visinu (height.metric) u posebnom <div> za svaku rasu.
// ===============================
let catsWeight = document.getElementById("catsWeight");
async function displayCatWeightHeight() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    let div = document.createElement("div");
    div.innerHTML = `<p>Rase: ${breed.name}, Weight is: ${breed.weight.metric};</p>`;
    catsWeight.appendChild(div);
  }
}
displayCatWeightHeight();
// ===============================
// VEŽBA 3
// Koristi The Cat API.
// Fetch-uj sve rase i dodaj <p>
// samo za one rase koje imaju temperament "Affectionate".
// ===============================
let catsTemperament = document.getElementById("catsTemperament");
async function displayCatTemperament() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    if (breed.temperament.includes("Affectionate")) {
      let p = document.createElement("p");
      p.textContent = `Rase: ${breed.name}, Temperament: ${breed.temperament}`;
      catsTemperament.appendChild(p);
    }
  }
}
displayCatTemperament();
// ===============================
// VEŽBA 4
// Koristi The Cat API.
// Fetch-uj sve rase i napravi <select>
// dropdown sa imenima svih rasa.
// ===============================
let selectCatsName = document.getElementById("selectCatsName");
async function displayCatBreedsDropdown() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    let option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    selectCatsName.appendChild(option);
  }
}
displayCatBreedsDropdown();
// ===============================
// VEŽBA 5
// Koristi The Cat API.
// Fetch-uj sve rase i dodaj <div>
// sa imenom i life_span za rase
// koje imaju životni vek duži od 15 godina.
// ===============================
let catsLifeSpan = document.getElementById("catsLifeSpan");
async function displayCatLifeSpan() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    let p = document.createElement("p");

    if (parseInt(breed.life_span.split(" ")[2]) > 15) {
      p.textContent = `Rase: ${breed.name}, Life Span: ${breed.life_span}`;
      catsLifeSpan.appendChild(p);
    }
  }
}
displayCatLifeSpan();
// ===============================
// VEŽBA 6
// Koristi The Cat API.
// Fetch-uj sve rase i prikaži u <ul>
// samo one koje su pogodne za stan
// (adaptability >= 5).
// ===============================
let catsAdaptability = document.getElementById("catsAdaptability");
async function displayCatAdaptability() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    if (breed.adaptability >= 5) {
      let li = document.createElement("li");
      li.textContent = `Rase: ${breed.name}, Adaptability: ${breed.adaptability}`;
      catsAdaptability.appendChild(li);
    }
  }
}
displayCatAdaptability();
// ===============================
// VEŽBA 7
// Koristi The Cat API.
// Fetch-uj sve rase.
// Kreiraj niz sa imenima rasa.
// Sortiraj imena po abecedi
// i prikaži ih u <ul>.
// ===============================
let catsSortedNames = document.getElementById("catsSortedNames");
async function displaySortedCatNames() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  let catNames = [];
  for (let breed of breeds) {
    catNames.push(breed.name);
  }
  catNames.sort();

  for (let name of catNames) {
    let li = document.createElement("li");
    li.textContent = name;
    catsSortedNames.appendChild(li);
  }
}
displaySortedCatNames();
// ===============================
// VEŽBA 8
// Koristi The Cat API.
// Fetch-uj sve rase.
// Izračunaj prosečnu težinu
// koristeći weight.metric
// i prikaži rezultat u <p>.
// ===============================
let catAverageWeight = document.getElementById("catAverageWeight");
async function displayAverageCatWeight() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  let p = document.createElement("p");
  let averageWeight = 0;

  for (let breed of breeds) {
    averageWeight += parseFloat(breed.weight.metric.split(" ")[2]);
  }
  averageWeight /= breeds.length;
  p.textContent = `Average Weight of a Cat is: ${averageWeight.toFixed(2)} kg`;
  catAverageWeight.appendChild(p);
}
displayAverageCatWeight();
// ===============================
// VEŽBA 9
// Koristi The Cat API.
// Fetch-uj sve rase i prikaži <li>
// samo za rase koje imaju
// dog_friendly >= 4.
// ===============================
let catsDogFriendly = document.getElementById("catsDogFriendly");
async function displayDogFriendlyCats() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    let li = document.createElement("li");
    if (breed.dog_friendly >= 4) {
      li.textContent = `Rase: ${breed.name}, Dog Friendly: ${breed.dog_friendly}`;
      catsDogFriendly.appendChild(li);
    }
  }
}
displayDogFriendlyCats();
// ===============================
// VEŽBA 10
// Koristi The Cat API.
// Fetch-uj sve rase.
// Kreiraj niz svih temperamenta.
// Prikaži jedinstvene temperament vrednosti u <ul>.
// ===============================
let uniqueTemperament = document.getElementById("uniqueTemperament");
async function displayUniqueTemperament() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  let temperamentArray = [];

  for (let breed of breeds) {
    let temperaments = breed.temperament.split(", ");
    temperamentArray.push(temperaments);
  }

  for (temperament of temperamentArray) {
    let li = document.createElement("li");
    li.textContent = temperament;
    uniqueTemperament.appendChild(li);
  }
}
displayUniqueTemperament();
// ===============================
// VEŽBA 11
// Koristi JSONPlaceholder API.
// Fetch-uj korisnike.
// Prikaži <div> sa tekstom:
// "Ime: X, Grad: Y"
// za svakog korisnika.
// ===============================
let usersDiv = document.getElementById("usersDiv");
async function displayUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let users = await fetchData(url);

  for (let user of users) {
    let div = document.createElement("div");
    div.textContent = `Name: ${user.name}, City: ${user.address.city}`;
    usersDiv.appendChild(div);
  }
}
displayUsers();
// ===============================
// VEŽBA 12
// Koristi JSONPlaceholder API.
// Fetch-uj TODO zadatke.
// Prikaži <li> samo za zadatke
// čiji je userId = 1.
// ===============================
let todosList = document.getElementById("todosList");
async function displayTodos() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  let todos = await fetchData(url);

  for (let todo of todos) {
    if (todo.userId === 1) {
      let li = document.createElement("li");
      li.textContent = `User ID: ${todo.userId}, Title: ${todo.title}`;
      todosList.appendChild(li);
    }
  }
}
displayTodos();
// ===============================
// VEŽBA 13
// Koristi The Cat API.
// Fetch-uj sve rase.
// Dodaj <p> sa tekstom:
// "Ime rase: X, Temperament: Y"
// samo za rase koje imaju
// "Intelligent" u temperamentu.
// ===============================
let catsIntelligent = document.getElementById("catsIntelligent");
async function displayIntelligentCats() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    if (breed.temperament.includes("Intelligent")) {
      let p = document.createElement("p");
      p.textContent = `Rase: ${breed.name}, Temperament: ${breed.temperament}`;
      catsIntelligent.appendChild(p);
    }
  }
}
displayIntelligentCats();
// ===============================
// VEŽBA 14
// Koristi JSONPlaceholder API.
// Fetch-uj postove.
// Dodaj <div> sa naslovom i body
// samo za postove čiji je id <= 5.
// ===============================
let divPostsID = document.getElementById("divPostsID");
async function displayPosts() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let posts = await fetchData(url);

  for (let post of posts) {
    if (post.id <= 5) {
      let div = document.createElement("div");
      div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      divPostsID.appendChild(div);
    }
  }
}
displayPosts();
// ===============================
// VEŽBA 15
// Koristi The Cat API.
// Fetch-uj sve rase.
// Dodaj <p> sa tekstom:
// "Ime: X, Ljubaznost: Y"
// samo za rase koje imaju
// affection_level >= 4.
// ===============================
let catsAffectionLevel = document.getElementById("catsAffectionLevel");
async function displayAffectionateCats() {
  let url = "https://api.thecatapi.com/v1/breeds";
  let breeds = await fetchData(url);

  for (let breed of breeds) {
    let p = document.createElement("p");
    if (breed.affection_level >= 4) {
      p.textContent = `Rase: ${breed.name}, Affection Level: ${breed.affection_level}`;
      catsAffectionLevel.appendChild(p);
    }
  }
}
displayAffectionateCats();
