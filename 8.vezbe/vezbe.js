// Vežbe – Kombinovane (20 vežbi)
//
// 1. Napravi <div id="glavni"></div> i pomoću createElement dodaj <p>
//    sa tekstom "Zdravo" i stilom crvene boje.

let divMain = document.getElementById("main");
let paragraph = document.createElement("p");
paragraph.innerText = "Zdravo!";
divMain.appendChild(paragraph);

paragraph.style.color = "red";
//
// 2. Napravi niz imena = ["Ana", "Marko", "Jovan"].
//    Napravi <ul id="lista"></ul> i pomoću for petlje dodaj svaki
//    element niza kao <li> u listu.

let names = ["Ana", "Marko", "Jovan"];
let listOfNames = document.createElement("ul");
for (let name of names) {
  listOfNames.innerHTML += `<li>${name}</li>`;
  divMain.appendChild(listOfNames);
}
//
// 3. Napravi varijablu broj = 15.
//    Napravi <p id="par"></p> i pomoću if upiši:
//    - "Broj je veći od 10"
//    - ili "Broj je manji ili jednak 10".

let number = 15;
let paragraphNumber = document.createElement("p");
if (number > 10) {
  paragraphNumber.innerHTML = "Broj je veci od 10";
  document.body.appendChild(paragraphNumber);
} else {
  paragraphNumber.innerHTML = "Broj je manji ili jednak sa 10";
  document.body.appendChild(paragraphNumber);
}
//
// 4. Napravi niz ocene = [5, 3, 4, 2, 5].
//    Pomoću for petlje saberi sve ocene, zatim prikaži zbir
//    u <p id="zbir"></p>.

let grades = [5, 3, 4, 2, 5];
let totalParagraph = document.createElement("p");
let sum = 0;
for (let grade of grades) {
  sum += grade;
}
totalParagraph.innerHTML = `Zbir ocena je: ${sum}`;
document.body.appendChild(totalParagraph);
//
// 5. Napravi <div id="box"></div> i pomoću createElement dodaj:
//    - <h2> sa tekstom "Naslov"
//    - <p> sa tekstom "Opis".

let box = document.getElementById("box");
let title = document.createElement("h2");
let description = document.createElement("p");
title.innerText = "Naslov";
description.innerText = "Opis";
box.appendChild(title);
box.appendChild(description);

//
// 6. Napravi niz gradovi = ["Beograd", "Novi Sad", "Niš"].
//    Pomoću for + if dodaj u <ul id="gradovi"></ul>
//    samo gradove koji počinju slovom "N".

let listOfCities = document.getElementById("gradovi");
let cities = ["Beograd", "Novi Sad", "Niš"];

for (let city of cities) {
  if (city.includes("N")) {
    listOfCities.innerHTML += `<li>${city}</li>`;
  }
}
//
// 7. Napravi <div class="card"></div> i pomoću createElement dodaj:
//    - <h3> sa tekstom "Kartica"
//    - <p> sa tekstom "Opis kartice".

let card = document.getElementsByClassName("card");
let cardH3 = document.createElement("h3");
let paragraphDescription = document.createElement("p");

let textH3 = document.createTextNode("Kartica");
let paragraphText = document.createTextNode("Opis kartice");

cardH3.appendChild(textH3);
paragraphDescription.appendChild(paragraphText);
card[0].appendChild(cardH3);
card[0].appendChild(paragraphDescription);
//
// 8. Napravi varijablu poeni = 72.
//    Napravi <p id="rezultat"></p> i pomoću if / else if / else
//    ispiši:
//    - "Odličan"
//    - "Dobar"
//    - "Nedovoljan".

let points = 85;
let paragraphPoints = document.createElement("p");
let appendPoints;

if (points > 70) {
  appendPoints = "Odlican";
} else if (points <= 70 && points >= 50) {
  appendPoints = "Dobar";
} else {
  appendPoints = "Nedovoljan";
}

paragraphPoints.innerHTML = appendPoints;
document.body.appendChild(paragraphPoints);
//
// 9. Napravi niz brojevi = [2, 4, 6, 8, 10].
//    Pomoću for petlje dodaj <li> u
//    <ul id="listaBrojeva"></ul> sa kvadratom svakog broja.

let arrayOfNumbers = [2, 4, 6, 8, 10];
let listOfNumbers = document.getElementById("listaBrojeva");

for (let number of arrayOfNumbers) {
  listOfNumbers.innerHTML += `<li>${number * number}</li>`;
}
//
// 10. Napravi <div id="container"></div> i pomoću createElement
//     dodaj 5 <p> elemenata sa tekstom:
//     - "Paragraf 1"
//     - ...
//     - "Paragraf 5".

let container = document.getElementById("container");
let containerParagraph = document.createElement("p");

for (let i = 0; i < 5; i++) {
  containerParagraph.innerHTML += `Paragraf ${i + 1} <br/>`;
  container.appendChild(containerParagraph);
}
//
// 11. Napravi niz uloge = ["admin", "user", "guest"].
//     Pomoću switch upiši u <ul id="uloge"></ul>:
//     - "Admin pristup"
//     - "Korisnik"
//     - "Gost".

let roles = ["admin", "user", "guest"];
let ulRoles = document.getElementById("uloge");
let liRoles = document.createElement("li");
let role = "admin";

switch (role) {
  case "admin":
    liRoles.innerHTML += "Admin pristup";
    ulRoles.appendChild(liRoles);
    break;
  case "user":
    liRoles.innerHTML += "Korisnik";
    ulRoles.appendChild(liRoles);
    break;
  case "guest":
    liRoles.innerHTML += "Gost";
    ulRoles.appendChild(liRoles);
    break;
}
//
// 12. Napravi niz statusi = [true, false, true].
//     Pomoću for petlje i if dodaj u <ul id="statusi"></ul>:
//     - "Ulogovan"
//     - ili "Nije ulogovan".

let statuses = [true, false, true];
let ulStatuses = document.getElementById("statusi");
for (let status of statuses) {
  let li = document.createElement("li");
  let liText;
  if (status === true) {
    liText = document.createTextNode("Ulogovan");
    li.appendChild(liText);
    ulStatuses.appendChild(li);
  } else {
    liText = document.createTextNode("Nije ulogovan");
    li.appendChild(liText);
    ulStatuses.appendChild(li);
  }
}
//
// 13. Napravi:
//     <p id="tekst">Stari tekst</p>

let createParagraph = document.createElement("p");
createParagraph.id = "tekst";
document.body.appendChild(createParagraph);
createParagraph.innerHTML = "Stari tekst";
//
//     Pomoću innerHTML dodaj:
//     <strong>Novi tekst u bold</strong>.

createParagraph.innerHTML = "<strong>Novi tekst u bold</strong>";
//
// 14. Napravi niz brojevi = [1, 3, 5, 7, 9].
//     Pomoću for petlje dodaj u <ul id="neparni"></ul>
//     samo neparne brojeve.

let arrayeOfNumbers2 = [1, 3, 5, 7, 9];
let ulOdd = document.getElementById("neparni");
for (let number of arrayeOfNumbers2) {
  let li = document.createElement("li");
  li.innerHTML = number;
  ulOdd.appendChild(li);
}
//
// 15. Napravi <div class="box"></div> i pomoću createElement
//     dodaj <p> sa tekstom "Hello" i promeni
//     boju teksta na plavu.

let divBox = document.getElementsByClassName("box");
let createParagraph2 = document.createElement("p");
createParagraph2.innerHTML = "Hello";
divBox[0].appendChild(createParagraph2);

createParagraph2.style.color = "blue";
//
// 16. Napravi niz imena = ["Ana", "Marko", "Jovan"].
//     Pomoću for + if dodaj u <ul id="imena"></ul>
//     samo imena sa više od 3 karaktera.

let arrNames = ["Ana", "Marko", "Jovan"];
let createUl = document.createElement("ul");
createUl.id = "imena";
document.body.appendChild(createUl);
for (let name of arrNames) {
  if (name.length > 3) {
    let li = document.createElement("li");
    li.innerHTML += name;
    createUl.appendChild(li);
  }
}
//
// 17. Napravi <div id="glavni"></div> i pomoću createElement dodaj:
//     - <h2> "Naslov"
//     - <p> "Paragraf"

let idGlavni = document.createElement("div");
idGlavni.id = "glavni";
let h2Naslov = document.createElement("h2");
let pParagraph = document.createElement("p");
h2Naslov.innerHTML = "Naslov";
pParagraph.innerHTML = "Paragraf";
idGlavni.appendChild(h2Naslov);
idGlavni.appendChild(pParagraph);
document.body.appendChild(idGlavni);
//
//     Zatim promeni tekst <p> na
//     "Promenjen paragraf"
//     koristeći getElementsByTagName.

let changeParagraph = document.getElementsByTagName("p");
for (paragraphTag of changeParagraph) {
  if (paragraphTag.innerHTML === "Paragraf") {
    paragraphTag.innerHTML = "Promenjen paragraf";
  }
}
//
// 18. Napravi niz brojevi = [10, 20, 30, 40, 50].
//     Pomoću for petlje dodaj u
//     <ul id="listaBrojeva"></ul>
//     elemente sa tekstom:
//     "Broj: X",
//     gde je X broj iz niza.

let arrayeOfNumbers3 = [10, 20, 30, 40, 50];
let listaBrojevaUl = document.getElementById("listaBrojeva");
for (let num of arrayeOfNumbers3) {
  let li = document.createElement("li");
  li.innerHTML = "Broj: " + num;
  listaBrojevaUl.appendChild(li);
}
//
// 19. Napravi <div class="container"></div> i pomoću createElement
//     dodaj <p> sa tekstom "Paragraf 1",
//     zatim pomoću petlje dodaj još:
//     - "Paragraf 2"
//     - "Paragraf 3"
//     - "Paragraf 4".

let container2 = document.getElementsByClassName("container2");
let paragraph2 = document.createElement("p");
paragraph2.innerHTML = "Paragraf 1";
container2[0].appendChild(paragraph2);
for (let i = 1; i < 4; i++) {
  let p = document.createElement("p");
  p.innerHTML = "Paragraf " + (i + 1);
  container2[0].appendChild(p);
}
//
// 20. Napravi niz ocene 2= [5, 4, 3, 2, 1].
//     Pomoću for + if dodaj u <ul id="ocena"></ul>:
//     - "Odličan" za 5
//     - "Dobar" za 3–4
//     - "Nedovoljan" za 1–2.

let ocene = [5, 4, 3, 2, 1];
let ulOcena = document.getElementById("ocena");
for (let o of ocene) {
  let li = document.createElement("li");
  if (o === 5) {
    li.innerHTML = "Odlican " + o;
    ulOcena.appendChild(li);
  } else if (o >= 3 && o <= 4) {
    li.innerHTML = "Dobar " + o;
    ulOcena.appendChild(li);
  } else {
    li.innerHTML = "Nedovoljan " + o;
    ulOcena.appendChild(li);
  }
}
