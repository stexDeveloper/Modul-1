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

function createHTMLElement(element, content, append, content2 = "") {
  element.textContent = content;

  if (content2) {
    element.textContent += " " + content2;
  }

  return append.appendChild(element);
}

// ============================================================
// VEŽBA 1 — JSONPlaceholder
// API: https://jsonplaceholder.typicode.com/posts
// ------------------------------------------------------------
// Zadatak:
// Pošalji POST zahtev sa podacima:
// { title: "Test", body: "Sadržaj", userId: 1 }
//
// Prikaži odgovor API-ja u konzoli.
// ============================================================

let data = { title: "Test", body: "Sadržaj", userId: 1 };

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result = await response.json();

  console.log(result);
}

getData();

// ============================================================
// VEŽBA 2 — ReqRes
// API: https://reqres.in/api/users
// ------------------------------------------------------------
// Zadatak:
// Napravi <form> sa:
// - input poljem za ime
// - input poljem za posao
// - submit dugmetom
//
// Nakon submit-a pošalji POST zahtev.
// U <div> prikaži:
// - id kreiranog korisnika
// - createdAt vreme kreiranja
// ============================================================

let userCreation = document.getElementById("userCreation");
let showUser = document.getElementById("showUser");
let userName = document.getElementById("userName");
let userJob = document.getElementById("userJob");

userCreation.addEventListener("submit", function (e) {
  e.preventDefault();

  let userData = {
    name: userName.value,
    job: userJob.value,
  };

  async function getUsers(userData) {
    let response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    let result = await response.json();

    let paragraphName = document.createElement("p");
    let paragraphCreatedAt = document.createElement("p");
    createHTMLElement(paragraphName, result.id, showUser);
    createHTMLElement(paragraphCreatedAt, result.createdAt, showUser);
  }

  getUsers(userData);
});

// ============================================================
// VEŽBA 3 — DummyJSON
// API: https://dummyjson.com/users/add
// ------------------------------------------------------------
// Zadatak:
// Napravi funkciju koja šalje POST zahtev sa podacima:
// { firstName: "Petar", lastName: "Petrović", age: 25 }
//
// JSON odgovor ispiši u konzoli.
// ============================================================

let sentUserData = {
  firstName: "Petar",
  lastName: "Petrović",
  age: 25,
};

async function getSentUserData() {
  let response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(sentUserData),
  });

  let result = await response.json();

  console.log(result);
}

getSentUserData();

// ============================================================
// VEŽBA 4 — JSONPlaceholder
// API: https://jsonplaceholder.typicode.com/posts
// ------------------------------------------------------------
// Zadatak:
// Napravi <button>.
// Klikom na dugme poslati POST zahtev sa fiksnim podacima.
//
// Nakon uspešnog odgovora:
// - uzeti kreirani id
// - prikazati id u <p> elementu
// ============================================================

let showId = document.getElementById("showId");
let showCreatedId = document.getElementById("showCreatedId");

let fixedData = {
  title: "Test",
  body: "Sadržaj",
  userId: 1,
};

showId.addEventListener("click", function (e) {
  async function getId() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fixedData),
    });

    let result = await response.json();

    showCreatedId.textContent = result.id;
  }

  getId();
});

// ============================================================
// VEŽBA 5 — ReqRes
// API: https://reqres.in/api/users
// ------------------------------------------------------------
// Zadatak:
// Napravi funkciju:
// dodajKorisnika(name, job)
//
// Funkcija treba da:
// - primi name i job kao parametre
// - pošalje POST zahtev
// - nakon uspešnog odgovora ispiše u konzoli:
//   "Uspešno kreirano: ID = X"
// ============================================================

let nameOfUser = "Stex";
let job = "Programer";

async function createUser(name, job) {
  let user = { name: name, job: job };

  let response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  let result = await response.json();

  console.log(`Uspesno kreiran: ID = ${result.id}`);
}

createUser(nameOfUser, job);

// ============================================================
// VEŽBA 6 — DummyJSON
// API: https://dummyjson.com/users/add
// ------------------------------------------------------------
// Zadatak:
// Napravi niz korisnika u obliku:
// [
//   { firstName, lastName, age },
//   ...
// ]
//
// Pomoću loop-a prođi kroz niz.
// Za svakog korisnika pošalji poseban POST zahtev.
//
// Za svaki odgovor ispiši njegov id u konzoli.
// ============================================================

let users = [
  {
    firstName: "Petar",
    lastName: "Petrović",
    age: 25,
  },
  {
    firstName: "Marko",
    lastName: "Marković",
    age: 30,
  },
  {
    firstName: "Ana",
    lastName: "Anić",
    age: 22,
  },
  {
    firstName: "Nikola",
    lastName: "Nikolić",
    age: 28,
  },
];

async function getUsersId(users) {
  for (let user of users) {
    let response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let result = await response.json();

    console.log(`Users ID: ${result.id}`);
  }
}
getUsersId(users);

// ============================================================
// VEŽBA 7 — JSONPlaceholder
// API: https://jsonplaceholder.typicode.com/posts
// ------------------------------------------------------------
// Zadatak:
// Napravi <form> sa:
// - inputom za title
// - inputom/textarea za body
// - submit dugmetom
//
// Nakon submit-a pošalji POST zahtev.
//
// Uspešan odgovor dodaj u <ul> kao novi <li>.
// U <li> prikaži:
// - naslov
// - body
// ============================================================

let showTitleBody = document.getElementById("showTitleBody");
let showPostData = document.getElementById("showPostData");
let postTitle = document.getElementById("postTitle");
let postBody = document.getElementById("postBody");

showTitleBody.addEventListener("submit", function (e) {
  e.preventDefault();

  let postData = {
    title: postTitle.value,
    body: postBody.value,
  };

  async function getPostData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    let result = await response.json();

    let titleLi = document.createElement("li");
    let titleBody = document.createElement("li");

    createHTMLElement(titleLi, result.title, showPostData);
    createHTMLElement(titleBody, result.title, showPostData);
  }
  getPostData();
});

// ============================================================
// VEŽBA 8 — ReqRes
// API: https://reqres.in/api/users
// ------------------------------------------------------------
// Zadatak:
// Napravi funkciju koja šalje POST zahtev.
//
// Name i job treba da budu nasumično generisani.
// Nakon odgovora prikaži ceo odgovor u alert prozoru.
// ============================================================

let names = ["Petar", "Marko", "Ana", "Nikola", "Stefan"];
let jobs = ["Programer", "Designer", "Tester", "Manager", "Developer"];

let nameRandom = Math.floor(Math.random() * names.length);
let jobsRandom = Math.floor(Math.random() * jobs.length);

let randomData = {
  name: names[nameRandom],
  job: jobs[jobsRandom],
};

async function getRandomName(data) {
  let response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let result = await response.json();

  console.log(result);
}
getRandomName(randomData);

// ============================================================
// VEŽBA 9 — DummyJSON
// API: https://dummyjson.com/users/add
// ------------------------------------------------------------
// Zadatak:
// Napravi <button> i <div> element.
//
// Klikom na dugme:
// - poslati POST zahtev
// - proveriti da li je kreiranje uspešno
//
// Ako je uspešno:
// - promeniti boju <div> elementa u zeleno
// ============================================================

let changeColor = document.getElementById("changeColor");
let clickColor = document.getElementById("clickColor");

let userData2 = {
  firstName: "Marko",
  age: 25,
};

clickColor.addEventListener("click", function (e) {
  e.preventDefault();

  async function changeColorOnClick() {
    let response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData2),
    });

    if (response.status === 201) changeColor.style.backgroundColor = "green";
  }
  changeColorOnClick();
});

// ============================================================
// VEŽBA 10 — JSONPlaceholder
// API: https://jsonplaceholder.typicode.com/posts
// ------------------------------------------------------------
// Zadatak:
// Napravi funkciju koja šalje POST zahtev.
//
// Funkcija treba da:
// - vrati true ako je HTTP status 201
// - vrati false ako status nije 201
//
// Rezultat funkcije prikaži u <p> elementu.
// ============================================================

let showStatusCode = document.getElementById("showStatusCode");

let postData = {
  title: "Moj post",
  body: "Ovo je neki tekst",
  userId: 1,
};

async function getPostData2() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return (checkStatus = response.status === 201 ? true : false);
}

async function showPostData2() {
  let show = await getPostData2();

  showStatusCode.textContent = `Status je: ${show}`;
}
showPostData2();

// ============================================================
// VEŽBA 11 — ReqRes
// API: https://reqres.in/api/users
// ------------------------------------------------------------
// Zadatak:
// Napravi <form> za unos podataka korisnika.
//
// Na submit:
// - poslati POST zahtev
// - sačekati odgovor API-ja
//
// Ako je odgovor uspešan:
// - resetovati sva polja forme
// ============================================================

let formAnswer = document.getElementById("formAnswer");
let postTitle2 = document.getElementById("postTitle2");
let postBody2 = document.getElementById("postBody2");

let userData = {
  firstName: "Marko",
  age: 30,
};

formAnswer.addEventListener("submit", function (e) {
  e.preventDefault();

  async function getUserData() {
    // vezbe.js:463  POST https://reqres.in/api/users 429 (Too Many Requests)
    //pa cu koristiti ovaj: https://dummyjson.com/users/add
    let response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    let result = await response.json();

    if (response.status === 201) {
      postTitle2.value = " ";
      postBody2.value = " ";
    }
  }
  getUserData();
});

// ============================================================
// VEŽBA 12 — DummyJSON
// API: https://dummyjson.com/users/add
// ------------------------------------------------------------
// Zadatak:
// Napravi funkciju koja šalje POST zahtev.
//
// Funkcija treba da vrati SAMO id novog korisnika.
//
// Napravi niz korisnika i pomoću loop-a:
// - šalji POST za svakog korisnika
// - uzimaj samo id iz odgovora
// - dodaj svaki id u <ul>
// ============================================================

let users2 = [
  { firstName: "Marko", age: 25 },
  { firstName: "Ana", age: 22 },
  { firstName: "Nikola", age: 30 },
  { firstName: "Stefan", age: 27 },
  { firstName: "Milica", age: 24 },
  { firstName: "Petar", age: 31 },
  { firstName: "Jovana", age: 23 },
  { firstName: "Luka", age: 28 },
  { firstName: "Mina", age: 21 },
  { firstName: "Filip", age: 26 },
  { firstName: "Sara", age: 29 },
];

let usersIds = document.getElementById("usersIds");

async function getIdUsers(array) {
  for (let user of array) {
    let response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let result = await response.json();

    if (result.id === 209) {
      let li = document.createElement("li");

      createHTMLElement(li, result.firstName, usersIds, result.age);
    }
  }
}
getIdUsers(users2);

// ============================================================
// VEŽBA 13 — JSONPlaceholder
// API: https://jsonplaceholder.typicode.com/posts
// ------------------------------------------------------------
// Zadatak:
// Napravi niz postova u obliku:
// [
//   { title, body, userId },
//   ...
// ]
//
// Za svaki post pošalji POST zahtev.
//
// Prikaži samo one odgovore kod kojih je:
// id > 100
// ============================================================

let posts = [
  {
    title: "Prvi post",
    body: "Ovo je prvi tekst.",
    userId: 1,
  },
  {
    title: "Drugi post",
    body: "Ovo je drugi tekst.",
    userId: 2,
  },
  {
    title: "Treći post",
    body: "Ovo je treći tekst.",
    userId: 3,
  },
  {
    title: "Četvrti post",
    body: "Ovo je četvrti tekst.",
    userId: 4,
  },
  {
    title: "Peti post",
    body: "Ovo je peti tekst.",
    userId: 5,
  },
];

async function showUsersID(array) {
  for (let user of array) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let result = await response.json();

    if (result.id > 100) console.log(result);
  }
}
showUsersID(posts);

// ============================================================
// VEŽBA 14 — ReqRes
// API: https://reqres.in/api/users
// ------------------------------------------------------------
// Zadatak:
// Napravi funkciju koja šalje POST zahtev.
//
// Koristi try/catch za obradu grešaka.
//
// Ako fetch ne uspe:
// - u <p> elementu prikaži:
//   "Greška"
// ============================================================

let showErrorOrMessage = document.getElementById("showErrorOrMessage");

let user = {
  firstName: "Marko",
  age: 25,
};

async function getErrorOrMessage() {
  try {
    let response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Greska");
    } else {
      let result = await response.json();
      console.log(result);
    }
  } catch (error) {
    showErrorOrMessage.textContent = error.message;
  }
}

getErrorOrMessage();

// ============================================================
// VEŽBA 15 — DummyJSON
// API: https://dummyjson.com/users/add
// ------------------------------------------------------------
// Zadatak:
// Napravi <form> sa submit event listenerom.
//
// Forma treba da pošalje POST zahtev.
//
// Nakon uspešnog odgovora:
// - ispod forme dodati novi <div>
// - u njemu prikazati:
//   "Kreirano: [firstName] [lastName]"
// ============================================================

let userForm2 = document.getElementById("userForm2");
let postTitle3 = document.getElementById("postTitle3");
let postBody3 = document.getElementById("postBody3");
let showUserFirstNameLastName = document.getElementById(
  "showUserFirstNameLastName",
);

let user2 = {
  firstName: "Marko",
  lastName: "Petrovic",
};

async function getUserFirstLastName() {
  let response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user2),
  });

  let result = await response.json();
  console.log(result);

  let p = document.createElement("p");

  createHTMLElement(
    p,
    `Kreirano: ${result.firstName}, ${result.lastName}`,
    showUserFirstNameLastName,
  );
}
getUserFirstLastName();
