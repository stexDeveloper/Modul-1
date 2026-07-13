// ======================================================
// VEŽBA 1
// Napravi <div id="main"></div> i pomoću createElement
// dodaj <p> sa tekstom "Dobrodošao!"
// Font veličina treba da bude 18px.
// ======================================================
let welcomeDiv = document.getElementById("main");
let welcomeParagraph = document.createElement("p");
welcomeParagraph.innerHTML = "Dobrodosao!";
welcomeDiv.appendChild(welcomeParagraph);
document.body.appendChild(welcomeDiv);
welcomeDiv.style.fontSize = "18px";
welcomeDiv.style.backgroundColor = "red";
welcomeDiv.style.width = "150px";
welcomeDiv.style.textAlign = "center";
// ======================================================
// VEŽBA 2
// Napravi niz:
// ["Petar", "Luka", "Maja"]
// Dodaj <p> samo za imena koja sadrže slovo "a".
// ======================================================
let nameArray = ["Petar", "Luka", "Maja", "Luna"];
for (let name of nameArray) {
  let createParagraph = document.createElement("p");
  if (name.includes("a")) {
    createParagraph.innerHTML = name;
  }
  document.body.appendChild(createParagraph);
}
// ======================================================
// VEŽBA 3
// Napravi promenljivu:
// score = 88
// Pomoću ternarnog operatora prikaži:
// "Pass" ili "Fail" u <p> elementu.
// ======================================================
let score = 88;
let scoreParagraph = document.createElement("p");
document.body.appendChild(scoreParagraph);
let passOrFail = score > 70 ? "Pass" : "Fail";
scoreParagraph.innerHTML = `Sa scorom od ${score} vi ste ${passOrFail}`;

// ======================================================
// VEŽBA 4
// Napravi niz:
// [3, 6, 9, 12, 15]
// Dodaj <li> sa tekstom:
// "Broj X je deljiv sa 3"
// samo za brojeve koji su deljivi sa 3.
// ======================================================
let arrayDevisableBy3 = [3, 6, 9, 12, 15];
let devisableUl = document.getElementById("devisable");
for (let num of arrayDevisableBy3) {
  let li = document.createElement("li");
  if (num % 3 === 0) {
    li.innerHTML = `Broj ${num} je deljiv sa 3`;
  }
  devisableUl.appendChild(li);
}
// ======================================================
// VEŽBA 5
// Napravi:
// <div class="container"></div>
//
// Pomoću petlje dodaj <span> elemente
// sa tekstom "Element X".
// Na svakoj iteraciji promeni boju teksta.
// ======================================================
let getContainer = document.getElementsByClassName("container");
let colors = ["#FF5733", "#3B82F6", "#10B981", "#8B5CF6", "#FACC15"];
for (let i = 0; i < colors.length; i++) {
  let br = document.createElement("br");
  let span = document.createElement("span");
  span.innerHTML = `Element: ${i + 1}`;
  span.style.color = colors[i];
  getContainer[0].appendChild(span);
  getContainer[0].appendChild(br);
}
// ======================================================
// VEŽBA 6
// Napravi niz:
// ["Mleko", "Hleb", "Sir"]
//
// Dodaj <li> sa tekstom:
// "Na lageru: X"
// za svaki proizvod.
// ======================================================
let lagerProizvoda = ["Mleko", "Hleb", "Sir"];
let lagerUl = document.createElement("ul");
lagerUl.id = "lager";
document.body.appendChild(lagerUl);
for (let proizvod of lagerProizvoda) {
  let li = document.createElement("li");
  li.innerHTML = `Na lageru: ${proizvod}`;
  lagerUl.appendChild(li);
}
// ======================================================
// VEŽBA 7
// Napravi:
// <h1 id="naslov"></h1>
//
// Proveri dužinu stringa:
// "Hello World"
//
// Ako je dužina veća od 5,
// prikaži "Dug naslov",
// u suprotnom "Kratak naslov".
// ======================================================
let naslovH1 = document.createElement("h1");
naslovH1.id = "naslov";
document.body.appendChild(naslovH1);
let naslov = "Hello World";
console.log(`Duzina naslova je: ${naslov.length}`);
if (naslov.length > 5) {
  naslovH1.innerHTML = "Dug Naslov";
} else {
  naslovH1.innerHTML = "Kratak Naslov";
}
// ======================================================
// VEŽBA 8
// Napravi niz:
// [1, 3, 5, 2, 4]
//
// Pomoću petlje izračunaj prosečnu ocenu
// i prikaži je u:
// <p id="prosek"></p>
// ======================================================
let averageGrade = document.createElement("p");
averageGrade.id = "prosek";
document.body.appendChild(averageGrade);
let grades = [1, 3, 5, 2, 4];
let sum = 0;
for (let grade of grades) {
  sum += grade;
}
averageGrade.innerHTML = `Prosecna ocena svih ocena je: ${sum / grades.length}`;
// ======================================================
// VEŽBA 9
// Napravi:
// <ul id="listaGradova"></ul>
//
// Dodaj <li> sa tekstom:
// "Grad: X"
// za svaki grad iz niza,
// ali preskoči grad "Niš".
// ======================================================
let listOfCities = document.getElementById("listaGradova");
let cities = [
  "Beograd",
  "Niš",
  "Novi Sad",
  "Kragujevac",
  "Subotica",
  "Čačak",
  "Kraljevo",
  "Užice",
  "Pančevo",
  "Zrenjanin",
];
for (let city of cities) {
  let li = document.createElement("li");
  if (city !== "Niš") {
    li.innerHTML = city;
    listOfCities.appendChild(li);
  }
}
// ======================================================
// VEŽBA 10
// Napravi:
// <div id="boxes"></div>
//
// Pomoću petlje dodaj 4 <div>
// sa klasom "box"
// i različitim pozadinskim bojama.
// ======================================================
let boxes = document.getElementById("boxes");
let backgroundColors = ["#E63946", "#457B9D", "#2A9D8F", "#F4A261"];
for (let i = 0; i < backgroundColors.length; i++) {
  let box = document.createElement("div");
  box.classList = "box";
  boxes.appendChild(box);
  box.style.height = "50px";
  box.style.width = "50px";
  box.style.backgroundColor = backgroundColors[i];
  box.style.margin = "10px";
}
// ======================================================
// VEŽBA 11
// Napravi niz:
// ["admin", "user", "guest"]
//
// Koristi switch i u <ul> dodaj:
// "Pun pristup"
// "Ograničen pristup"
// "Samo čitanje"
// ======================================================
let ulAccess = document.createElement("ul");
ulAccess.id = "access";
document.body.appendChild(ulAccess);
let listAccess = ["admin", "user", "guest"];
for (let access of listAccess) {
  let li = document.createElement("li");
  switch (access) {
    case "admin":
      li.innerHTML = access;
      ulAccess.appendChild(li);
      break;

    case "user":
      li.innerHTML = access;
      ulAccess.appendChild(li);
      break;

    case "guest":
      li.innerHTML = access;
      ulAccess.appendChild(li);
      break;
  }
}
// ======================================================
// VEŽBA 12
// Napravi:
// <input id="textInput">
//
// Koristi addEventListener("input")
// i prikazuj broj karaktera u:
// <p id="charCount"></p>
// ======================================================
let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount");
document.querySelector("#textInput").addEventListener("input", function (e) {
  let count = (charCount.innerHTML = e.target.value);
  charCount.innerHTML = count.length;
});
// ======================================================
// VEŽBA 13
// Napravi:
// <button id="toggleBtn">Prikaži/Sakrij</button>
// <div id="info">Informacija</div>
//
// Klikom na dugme
// menjaj vidljivost diva.
// ======================================================
let toggleBtn = document.getElementById("toggleBtn");
let info = document.getElementById("info");
info.style.width = "80px";
info.style.height = "40px";
info.style.backgroundColor = "lightBlue";
document.querySelector("#toggleBtn").addEventListener("click", function (e) {
  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
  } else {
    info.classList.add("hidden");
  }
});
// ======================================================
// VEŽBA 14
// Napravi niz:
// [0,1,2,3,4,5,6,7,8,9]
//
// Dodaj <li> samo za parne brojeve
// u:
// <ul id="parni"></ul>
// ======================================================
let evenNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = document.getElementById("parni");
for (let num of evenNums) {
  let li = document.createElement("li");
  if (num % 2 === 0) {
    li.innerHTML = `Even number is: ${num}`;
  }
  even.appendChild(li);
}
// ======================================================
// VEŽBA 15
// Napravi:
// <div id="colorBox"></div>
//
// Koristi mouseover i mouseout
// za promenu boje na slučajnu boju.
// ======================================================
let colorBox = document.getElementById("colorBox");
colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.backgroundColor = "red";
let colors2 = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "white",
  "gray",
];
document.querySelector("#colorBox").addEventListener("mouseover", function (e) {
  let random = (randomNum = Math.floor(Math.random() * colors2.length));
  colorBox.style.backgroundColor = colors2[random];
});
document.querySelector("#colorBox").addEventListener("mouseout", function (e) {
  let random = (randomNum = Math.floor(Math.random() * colors2.length));
  colorBox.style.backgroundColor = colors2[random];
});
// ======================================================
// VEŽBA 16
// Napravi:
// <div id="flexContainer"></div>
//
// Dodaj 5 <p> elemenata
// sa tekstom "Red X".
// Svaki drugi element neka bude bold.
// ======================================================
let flexContainer = document.getElementById("flexContainer");
flexContainer.style.width = "400px";
flexContainer.style.height = "400px";
flexContainer.style.backgroundColor = "lightBlue";
for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  if (i % 2 == 0) {
    p.style.fontWeight = "bold";
  }
  p.innerHTML = `Element ${i}`;
  flexContainer.appendChild(p);
}
// ======================================================
// VEŽBA 17
// Napravi niz:
// [5,4,3,2,1]
//
// Dodaj <p> sa tekstom:
// "Odličan"
// "Dobar"
// ili
// "Nedovoljan"
// koristeći if/else.
// ======================================================
let grades2 = [5, 4, 3, 2, 1];

for (let grade of grades2) {
  let gradesParagraph = document.createElement("p");

  if (grade === 5) {
    document.body.appendChild(gradesParagraph);
    gradesParagraph.innerHTML = `Sa ocenom ${grade}, Odlican uspeh`;
  } else if (grade >= 3 && grade <= 4) {
    gradesParagraph.innerHTML = `Sa ocenom ${grade}, Dobar uspeh`;
    document.body.appendChild(gradesParagraph);
  } else {
    gradesParagraph.innerHTML = `Sa ocenom ${grade}, Nedovoljan uspeh`;
    document.body.appendChild(gradesParagraph);
  }
}
// ======================================================
// VEŽBA 18
// Napravi:
// <button id="addCard">Dodaj karticu</button>
// <div id="cards"></div>
//
// Klikom na dugme dodaj novu karticu
// koja sadrži <h2> i <p>.
// ======================================================
let addCard = document.getElementById("addCard");
let cards = document.getElementById("cards");
document.querySelector("#addCard").addEventListener("click", function (e) {
  let addDiv = document.createElement("div");
  let addH2 = document.createElement("h2");
  let addP = document.createElement("p");
  addDiv.appendChild(addH2);
  addDiv.appendChild(addP);
  addH2.innerHTML = "Ovo je naslov h2";
  addP.innerHTML = "Ovo je paragraf";
  cards.appendChild(addDiv);
});
// ======================================================
// VEŽBA 19
// Napravi niz:
// ["Jabuka", "Banana", "Kruška", "Ananas"]
//
// Dodaj <li> sa tekstom:
// "Voće: X"
// samo ako ime voća ima više od 5 karaktera.
// ======================================================
let fruitsArray = ["Jabuka", "Banana", "Kruška", "Ananas", "Mango", "Kivi"];
let ulFruits = document.createElement("ul");
ulFruits.id = "fruits";
document.body.appendChild(ulFruits);
for (let fruit of fruitsArray) {
  let li = document.createElement("li");
  if (fruit.length > 5) {
    li.innerHTML = `${fruit} ima vise od 5 karakter`;
    ulFruits.appendChild(li);
  }
}
// ======================================================
// VEŽBA 20
// Napravi:
// <div id="numbers"></div>
//
// Za niz:
// [2,4,6,8]
//
// Dodaj <p> sa kvadratom svakog broja.
// ======================================================
let arrayNum = [2, 4, 6, 8];
let numbers = document.getElementById("numbers");
for (let num of arrayNum) {
  let p = document.createElement("p");
  p.innerHTML = `Kvadrat za broj ${num} je ${num * num}`;
  numbers.appendChild(p);
}
// ======================================================
// VEŽBA 21
// Napravi:
// <input id="focusInput">
//
// Koristi focus događaj
// i promeni pozadinu u svetlozelenu.
// ======================================================
let focusInput = document.getElementById("focusInput");
document.querySelector("#focusInput").addEventListener("focus", function (e) {
  this.style.backgroundColor = "green";
});
// ======================================================
// VEŽBA 22
// Napravi:
// <input id="blurInput">
//
// Koristi blur događaj
// i vrati pozadinu na belu.
// ======================================================
let blurInput = document.getElementById("blurInput");
blurInput.style.backgroundColor = "black";
document.querySelector("#blurInput").addEventListener("blur", function (e) {
  this.style.backgroundColor = "white";
});
// ======================================================
// VEŽBA 23
// Napravi:
// <p id="doubleClick">Dvaput klikni me</p>
//
// Koristi dblclick
// i promeni tekst u:
// "Dvaput kliknuto"
// ======================================================
let doubleClick = document.getElementById("doubleClick");
document
  .querySelector("#doubleClick")
  .addEventListener("dblclick", function (e) {
    doubleClick.innerHTML = "Dvaput klikni me";
  });
// ======================================================
// VEŽBA 24
// Napravi niz:
// [3,4,5,2]
//
// Pomoću for petlje i if uslova
// izračunaj koliko je ocena većih od 3
// i prikaži rezultat u:
// <p id="count"></p>
// ======================================================
let array = [3, 4, 5, 2];
let countGrade = document.getElementById("count");
let count = 0;
for (let a of array) {
  if (a > 3) {
    count++;
  }
}
countGrade.innerHTML = `Ukupan broj ocena vecih od 3 je: ${count}`;
// ======================================================
// VEŽBA 25
// Napravi:
// <div id="hoverEffect"></div>
//
// Koristi mouseenter i mouseleave
// za promenu boje.
// ======================================================
let hoverEffect = document.getElementById("hoverEffect");
hoverEffect.style.width = "100px";
hoverEffect.style.height = "100px";
hoverEffect.style.backgroundColor = "lightBlue";
document
  .querySelector("#hoverEffect")
  .addEventListener("mouseenter", function (e) {
    hoverEffect.style.backgroundColor = "green";
  });
document
  .querySelector("#hoverEffect")
  .addEventListener("mouseleave", function (e) {
    hoverEffect.style.backgroundColor = "blue";
  });
// ======================================================
// VEŽBA 26
// Napravi:
// <button id="addItemBtn">Dodaj stavku</button>
// <ul id="items"></ul>
//
// Klikom na dugme
// dodaj novi <li>
// sa tekstom:
// "Nova stavka"
// ======================================================
let addItemBtn = document.getElementById("addItemBtn");
let items = document.getElementById("items");
document.querySelector("#addItemBtn").addEventListener("click", function (e) {
  let li = document.createElement("li");
  li.innerHTML = "Nova stavka";
  items.appendChild(li);
});
// ======================================================
// VEŽBA 27
// Napravi niz:
// ["Ana", "Maja", "Ivan", "Luka"]
//
// Dodaj <p> sa tekstom:
// "Ime: X"
// u <div id="names"></div>,
// ali preskoči "Ivan".
// ======================================================
let names = ["Ana", "Maja", "Ivan", "Luka"];
let namesDiv = document.getElementById("names");
for (let name of names) {
  let p = document.createElement("p");
  if (name !== "Ivan") {
    p.innerHTML = name;
    namesDiv.appendChild(p);
  }
}
// ======================================================
// VEŽBA 28
// Napravi:
// <div id="boxesContainer"></div>
//
// Pomoću petlje dodaj 3 <div>
// sa tekstom "Box X"
// i različitim bojama.
// ======================================================
let boxesContainer = document.getElementById("boxesContainer");
let hexColors = ["#FF0000", "#00FF00", "#0000FF"];
for (let i = 0; i < hexColors.length; i++) {
  let div = document.createElement("div");
  boxesContainer.appendChild(div);
  div.style.width = "100px";
  div.style.height = "100px";
  div.innerHTML = `Boja ${i + 1}`;
  div.style.backgroundColor = hexColors[i];
}
// ======================================================
// VEŽBA 29
// Napravi niz:
// [5,10,15,20,25]
//
// Koristi for petlju i switch
// i dodaj <p> sa tekstom:
// "Deljiv sa 5"
// ili
// "Nije deljiv"
// ======================================================
let devisableBy5 = [5, 10, 15, 20, 25, 13, 14, 6, 134];
for (let num of devisableBy5) {
  let paragraph = document.createElement("p");
  document.body.appendChild(paragraph);
  switch (num % 5 === 0) {
    case true:
      paragraph.innerHTML = `Broj ${num} je deljiv sa 5`;
      break;
    case false:
      paragraph.innerHTML = `Broj ${num} nije deljiv sa 5`;
      break;
  }
}
// ======================================================
// VEŽBA 30
// Napravi:
// <div id="loopText"></div>
//
// Dodaj 5 <p> elemenata
// sa tekstom "Paragraf X".
// Svaki paran paragraf
// stilizuj plavom bojom.
// ======================================================
let loopText = document.getElementById("loopText");
for (let i = 0; i <= 5; i++) {
  let p = document.createElement("p");
  loopText.appendChild(p);
  p.innerHTML = `Paragraf ${i}`;
  if (i % 2 === 0) {
    p.style.color = "blue";
  }
}
