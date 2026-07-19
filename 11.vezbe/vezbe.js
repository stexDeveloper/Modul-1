// ======================================================
// VEŽBE – FUNKCIJE
// ======================================================

// ------------------------------------------------------
// 1. Napravi funkciju pozdravi()
// - Ispisuje "Zdravo!" u konzolu.
// - Nakon definicije pozovi funkciju.
// ------------------------------------------------------
function pozdravi() {
  console.log("Zdravo!");
}
pozdravi();
// ------------------------------------------------------
// 2. Napravi funkciju pozdraviIme(ime)
// - Prima parametar: ime.
// - Ispisuje "Zdravo, Ime!" u konzolu.
// ------------------------------------------------------
function pozdraviIme(ime) {
  console.log(`Zdravo, ${ime}`);
}
pozdraviIme("Stefan");
// ------------------------------------------------------
// 3. Napravi funkciju ispisiBroj(broj)
// - Prima parametar: broj.
// - Ispisuje "Broj je X" u konzolu.
// ------------------------------------------------------
function ispisiBroj(broj) {
  console.log(broj);
}
ispisiBroj(9);
// ------------------------------------------------------
// 4. Napravi funkciju ispisiNiz(niz)
// - Prima niz.
// - Koristi for petlju.
// - Ispisuje svaki element niza u konzolu.
// ------------------------------------------------------
let niz = [2, 5, 1, 1, 5];
function ispisNiz(niz) {
  for (let broj of niz) {
    console.log(broj);
  }
}
ispisNiz(niz);
// ------------------------------------------------------
// 5. Napravi funkciju ispisiParne(niz)
// - Prima niz brojeva.
// - Koristi for + if.
// - Ispisuje samo parne brojeve.
// ------------------------------------------------------
let niz2 = [2, 5, 1, 1, 5, 4, 8, 6];
function ispisParne(niz) {
  for (let broj of niz) {
    if (broj % 2 === 0) {
      console.log(broj);
    }
  }
}
console.log("-----------------");
ispisParne(niz2);
// ------------------------------------------------------
// 6. Napravi funkciju dodajParagraf(tekst)
// - Kreira <p> element.
// - Postavlja prosleđeni tekst.
// - Dodaje ga u:
//   <div id="container"></div>
// ------------------------------------------------------
let container = document.getElementById("container");
container.style.width = "100px";
container.style.height = "100px";
container.style.backgroundColor = "lightBlue";
function dodajParagraf(tekst) {
  let p = document.createElement("p");
  p.innerHTML = tekst;
  container.appendChild(p);
}
dodajParagraf("Sta ima");
// ------------------------------------------------------
// 7. Napravi funkciju promeniBoju(boxId, boja)
// - Prima id elementa.
// - Prima novu boju.
// - Menja backgroundColor elementa.
// ------------------------------------------------------
let boxId = document.getElementById("boxId");
boxId.style.width = "100px";
boxId.style.height = "100px";
boxId.style.backgroundColor = "lightBlue";
function promeniBoju(boxId, boja) {
  boxId.style.backgroundColor = boja;
}
promeniBoju(boxId, "red");
// ------------------------------------------------------
// 8. Napravi funkciju ispisiPozdravImeGodine(ime, godine)
// - Prima ime i godine.
// - Ispisuje:
//   "Zdravo, ime! Imaš X godina."
// ------------------------------------------------------
function ispisiPozdravImeGodine(ime, godine) {
  console.log(`Zdravo ${ime}! Imas ${godine} godina.`);
}
ispisiPozdravImeGodine("Stefan", 30);
// ------------------------------------------------------
// 9. Napravi funkciju ispisiListe(niz)
// - Kreira <ul> element.
// - Za svaki element niza kreira <li>.
// - Dodaje listu na stranicu.
// ------------------------------------------------------
let cities = [
  "Luxembourg",
  "Esch-sur-Alzette",
  "Differdange",
  "Dudelange",
  "Ettelbruck",
];
function ispisiListe(niz) {
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  for (let city of niz) {
    let li = document.createElement("li");
    li.innerHTML = city;
    ul.appendChild(li);
  }
}
ispisiListe(cities);
// ------------------------------------------------------
// 10. Napravi funkciju dodajNaslov(tekst)
// - Kreira <h2> element.
// - Postavlja prosleđeni tekst.
// - Dodaje ga u:
//   <div id="container"></div>
// ------------------------------------------------------
function dodajNaslov(tekst) {
  let secondContainer = document.getElementById("container2");
  secondContainer.style.width = "100px";
  secondContainer.style.height = "100px";
  secondContainer.style.backgroundColor = "lightBlue";
  let h2 = document.createElement("h2");
  h2.innerHTML = tekst;
  secondContainer.appendChild(h2);
}
dodajNaslov("Cao sta ima");
// ------------------------------------------------------
// 11. Napravi funkciju proveriParnost(broj)
// - Prima broj.
// - Ispisuje:
//   "Broj je paran"
//   ili
//   "Broj je neparan"
// ------------------------------------------------------
function proveriParnost(broj) {
  if (broj % 2 === 0) {
    console.log(`Broj ${broj} je paran broj`);
  } else {
    console.log(`Broj ${broj} je neparan broj`);
  }
}
proveriParnost(8);
// ------------------------------------------------------
// 12. Napravi funkciju ispisiUloge(niz)
// - Prima niz uloga.
// - Koristi for + switch.
// - Ispisuje:
//   "Admin"
//   "User"
//   "Guest"
// ------------------------------------------------------
let nizUloga = ["Admin", "User", "Guest"];
function ispisiUloge(niz) {
  for (let uloga of niz) {
    switch (uloga) {
      case "Admin":
        console.log(`Ovo je uloga za: ${uloga}`);
        break;

      case "User":
        console.log(`Ovo je uloga za: ${uloga}`);
        break;

      case "Guest":
        console.log(`Ovo je uloga za: ${uloga}`);
        break;
    }
  }
}
ispisiUloge(nizUloga);
// ------------------------------------------------------
// 13. Napravi funkciju ispisiKvadrate(niz)
// - Prima niz brojeva.
// - Ispisuje kvadrat svakog broja.
// ------------------------------------------------------
let nizKvadrata = [2, 5, 6, 2, 77, 123];
function ispisiKvadrate(niz) {
  for (let broj of niz) {
    console.log(`Kvadrat broja ${broj} je ${broj * broj}`);
  }
}
ispisiKvadrate(nizKvadrata);
// ------------------------------------------------------
// 14. Napravi funkciju dodajBox(tekst, boja)
// - Kreira <div>.
// - Postavlja tekst.
// - Postavlja boju pozadine.
// - Dodaje ga u:
//   <div id="container"></div>
// ------------------------------------------------------
let containerBox = document.getElementById("container3");
containerBox.style.height = "300px";
containerBox.style.width = "300px";
containerBox.style.backgroundColor = "yellow";
function dodajBox(tekst, boja) {
  let div = document.createElement("div");
  div.style.height = "150px";
  div.style.width = "150px";
  div.innerHTML = tekst;
  div.style.backgroundColor = boja;
  containerBox.appendChild(div);
}
dodajBox("Cao sta ima", "lightBlue");
// ------------------------------------------------------
// 15. Napravi funkciju pozdraviSve(nizImena)
// - Prima niz imena.
// - Koristi petlju.
// - Za svako ime ispisuje:
//   "Zdravo, Ime!"
// ------------------------------------------------------
let names = ["Ana", "Marko", "Jelena", "Nikola", "Milica"];
function pozdraviSve(niz) {
  for (let ime of niz) {
    console.log(`Zdravo, ${ime}`);
  }
}
pozdraviSve(names);
// ------------------------------------------------------
// 16. Napravi funkciju ispisiDuzinuStringa(string)
// - Prima string.
// - Ispisuje:
//   "Dužina stringa je X"
// ------------------------------------------------------
function ispisiDuzinuStringa(string) {
  console.log(`Duzina stringa je: ${string.length}`);
}
ispisiDuzinuStringa("Stefan");
// ------------------------------------------------------
// 17. Napravi funkciju dodajParagrafove(nizTekstova)
// - Prima niz tekstova.
// - Za svaki tekst kreira <p>.
// - Dodaje ih u:
//   <div id="container"></div>
// ------------------------------------------------------
let containerParagraph = document.getElementById("containerParagraph");
let texts = [
  "Zdravo!",
  "Dobar dan",
  "Kako si?",
  "Učim JavaScript",
  "Volim programiranje",
  "Sunčan je dan",
  "Pijem kafu",
  "Idem u šetnju",
  "Sve radi",
  "Odlično!",
];
function dodajParagrafove(nizTekstova) {
  for (let text of nizTekstova) {
    let p = document.createElement("p");
    p.innerHTML = text;
    containerParagraph.appendChild(p);
  }
}
dodajParagrafove(texts);
// ------------------------------------------------------
// 18. Napravi funkciju promeniSveBoje(nizId, boja)
// - Prima niz id-eva.
// - Prima novu boju.
// - Menja backgroundColor svih elemenata.
// ------------------------------------------------------
let nizId = [
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
  "brown",
  "turquoise",
  "navy",
  "olive",
  "beige",
  "gold",
  "silver",
  "maroon",
  "cyan",
  "lime",
];
let colors = [
  "#FF0000",
  "#0000FF",
  "#008000",
  "#FFFF00",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#000000",
  "#FFFFFF",
  "#808080",
  "#A52A2A",
  "#40E0D0",
  "#000080",
  "#808000",
  "#F5F5DC",
  "#FFD700",
  "#C0C0C0",
  "#800000",
  "#00FFFF",
  "#00FF00",
];
function promeniSveBoje(nizId, boja) {
  for (let i = 0; i < nizId.length; i++) {
    let div = document.createElement("div");
    div.id = nizId[i];
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = boja[i];
    document.body.appendChild(div);
  }
}
promeniSveBoje(nizId, colors);
// ------------------------------------------------------
// 19. Napravi funkciju ispisiOcene(niz)
// - Prima niz ocena.
// - Koristi for + if.
// - Ispisuje:
//   "Odličan"
//   "Dobar"
//   "Nedovoljan"
// ------------------------------------------------------
let ispisiOceneArray = [2, 5, 5, 1, 3, 2, 5, 4];
function ispisiOcene(niz) {
  for (let ocena of niz) {
    if (ocena === 5) {
      console.log(`Ocena ${ocena}: Odlican`);
    } else if (ocena >= 3 && ocena <= 4) {
      console.log(`Ocena ${ocena}: Dobar`);
    } else {
      console.log(`Ocena ${ocena}: Nedovoljan`);
    }
  }
}
ispisiOcene(ispisiOceneArray);
// ------------------------------------------------------
// 20. Napravi funkciju ispisiNizUDiv(niz, divId)
// - Prima niz.
// - Prima id diva.
// - Sve elemente niza ispisuje unutar
//   innerText zadatog diva.
// ------------------------------------------------------
let divTexts = [
  "Kako",
  "si",
  "danas?",
  "Šta",
  "radiš?",
  "Da",
  "li",
  "učiš",
  "JS?",
];
let divIds = [
  "word1",
  "word2",
  "word3",
  "word4",
  "word5",
  "word6",
  "word7",
  "word8",
  "word9",
];
let divColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "lightBlue",
  "cyan",
];
function ispisiNizDivova(niz, divId, colors) {
  for (let i = 0; i < niz.length; i++) {
    let div = document.createElement("div");
    div.id = divId[i];
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = colors[i];
    div.style.textAlign = "center";
    div.style.paddingTop = "50px";
    div.innerHTML = niz[i];
    document.body.appendChild(div);
  }
}
ispisiNizDivova(divTexts, divIds, divColors);
