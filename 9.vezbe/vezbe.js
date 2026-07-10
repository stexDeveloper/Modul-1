// ========================================
// VEŽBE – Event Listeners (15 vežbi)
// ========================================

// 1.
// Napravi dugme:
// <button id="btn1">Klikni me</button>
//
// Pomoću addEventListener("click", ...)
// promeni tekst dugmeta na:
// "Kliknuto".

let btn1 = document.createElement("button");
btn1.id = "btn1";
btn1.innerHTML = "Klikni me";
document.body.appendChild(btn1);

document.querySelector("#btn1").addEventListener("click", function (event) {
  btn1.innerHTML = "Kliknuto";
});

// ----------------------------------------

// 2.
// Napravi div:
// <div id="box1" style="width:100px; height:100px; background:red;"></div>

let box1 = document.createElement("div");
box1.id = "box1";
document.body.appendChild(box1);
box1.style.width = "100px";
box1.style.height = "100px";
box1.style.backgroundColor = "red";
//
// Pomoću addEventListener("mouseover", ...)
// promeni boju diva na plavu kada miš pređe preko njega.

document.querySelector("#box1").addEventListener("mouseover", function (event) {
  box1.style.backgroundColor = "blue";
});

// ----------------------------------------

// 3.
// Napravi div:
// <div id="box2" style="width:100px; height:100px; background:green;"></div>
//
// Pomoću addEventListener("mouseout", ...)
// vrati boju diva na zelenu kada miš napusti element.
let box2 = document.createElement("div");
box2.id = "box2";
document.body.appendChild(box2);
box2.style.width = "100px";
box2.style.height = "100px";
box2.style.backgroundColor = "green";
document.querySelector("#box2").addEventListener("mouseover", function (event) {
  box2.style.backgroundColor = "blue";
});
document.querySelector("#box2").addEventListener("mouseout", function (event) {
  box2.style.backgroundColor = "green";
});

// ----------------------------------------

// 4.
// Napravi input:
// <input id="input1" type="text">
//
// Pomoću addEventListener("keydown", ...)
// ispiši u konzoli svaki pritisnuti taster.
let input = document.createElement("input");
input.id = "input1";
input.type = "text";
document.body.appendChild(input);
document.querySelector("#input1").addEventListener("keydown", function (event) {
  console.log(event.key);
});

// ----------------------------------------

// 5.
// Napravi paragraf:
// <p id="para1">Hello</p>
//
// Pomoću addEventListener("dblclick", ...)
// promeni tekst paragrafa na:
// "Dvaput kliknuto".
let paragraph = document.createElement("p");
paragraph.id = "para1";
paragraph.innerHTML = "Hello";
document.body.appendChild(paragraph);
document.querySelector("#para1").addEventListener("dblclick", function (event) {
  paragraph.innerHTML = "Dvaput kliknuto";
});

// ----------------------------------------

// 6.
// Napravi:
//
// <button id="btn2">Dodaj paragraf</button>
// <div id="container"></div>
//
// Na klik dugmeta pomoću createElement()
// dodaj novi <p> element sa tekstom:
// "Novi paragraf"
// unutar container-a.
let btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.innerHTML = "Klikni me";
document.body.appendChild(btn2);
let divContainer = document.createElement("div");
divContainer.id = "container";
document.body.appendChild(divContainer);
divContainer.style.width = "200px";
divContainer.style.height = "200px";
divContainer.style.backgroundColor = "lightBlue";
document.querySelector("#btn2").addEventListener("click", function (e) {
  let clickParagraph = document.createElement("p");
  clickParagraph.innerHTML = "Novi paragraf";
  divContainer.appendChild(clickParagraph);
});

// ----------------------------------------

// 7.
// Napravi div:
// <div id="hoverDiv" style="width:100px; height:100px; background:yellow;"></div>
//
// Pomoću addEventListener("mouseenter", ...)
// promeni boju diva u narandžastu.
let hoverDiv = document.createElement("div");
hoverDiv.id = "hoverDiv";
document.body.appendChild(hoverDiv);
hoverDiv.style.width = "100px";
hoverDiv.style.height = "100px";
hoverDiv.style.backgroundColor = "yellow";
document
  .querySelector("#hoverDiv")
  .addEventListener("mouseenter", function (e) {
    hoverDiv.style.backgroundColor = "orange";
  });
document
  .querySelector("#hoverDiv")
  .addEventListener("mouseleave", function (e) {
    hoverDiv.style.backgroundColor = "purple";
  });

// ----------------------------------------

// 8.
// Napravi div:
// <div id="hoverDiv2" style="width:100px; height:100px; background:pink;"></div>
//
// Pomoću addEventListener("mouseleave", ...)
// promeni boju nazad u pink.
document
  .querySelector("#hoverDiv")
  .addEventListener("mouseleave", function (e) {
    hoverDiv.style.backgroundColor = "pink";
  });

// ----------------------------------------

// 9.
// Napravi:
//
// <input id="input2" type="text">
// <p id="output"></p>
//
// Pomoću addEventListener("input", ...)
// prikazuj trenutnu vrednost inputa
// u paragrafu.
let input2 = document.createElement("input");
input2.id = "input2";
document.body.appendChild(input2);
let outputParagraph = document.createElement("p");
outputParagraph.id = "output";
document.body.appendChild(outputParagraph);
document.querySelector("#input2").addEventListener("input", function (e) {
  console.log(e.target.value);
});

// ----------------------------------------

// 10.
// Napravi:
//
// <button id="btn3">Sakrij</button>
// <div id="box3">Sadržaj</div>
//
// Klikom na dugme sakrij box3
// koristeći:
// style.display = "none";
let bnt3 = document.createElement("button");
let box3 = document.createElement("div");
bnt3.id = "bnt3";
box3.id = "box3";
bnt3.innerHTML = "Sakrij";
box3.innerHTML = "Sadržaj";
document.body.appendChild(bnt3);
document.body.appendChild(box3);
document.querySelector("#bnt3").addEventListener("click", function (e) {
  box3.style.display = "none";
});

// ----------------------------------------

// 11.
// Napravi div:
// <div id="box4" style="width:100px; height:100px; background:grey;"></div>
//
// Pomoću addEventListener("mousedown", ...)
// promeni boju diva u crnu
// dok je dugme miša pritisnuto.
let box4 = document.createElement("div");
box4.id = "box4";
box4.style.width = "100px";
box4.style.height = "100px";
box4.style.backgroundColor = "grey";
document.body.appendChild(box4);
document.querySelector("#box4").addEventListener("mousedown", function (e) {
  box4.style.backgroundColor = "black";
});

// ----------------------------------------

// 12.
// Napravi div:
// <div id="box5" style="width:100px; height:100px; background:lightblue;"></div>
//
// Pomoću addEventListener("mouseup", ...)
// vrati boju diva na početnu
// kada otpustiš dugme miša.
let box5 = document.createElement("div");
box5.id = "box5";
box5.style.width = "100px";
box5.style.height = "100px";
box5.style.backgroundColor = "lightblue";
document.body.appendChild(box5);
document.querySelector("#box5").addEventListener("mouseup", function (e) {
  box5.style.backgroundColor = "grey";
});

// ----------------------------------------

// 13.
// Napravi:
//
// <button id="btn4">Dodaj</button>
// <div id="container2"></div>
//
// Svakim klikom na dugme
// dodaj novi <p> element
// sa tekstom:
// "Klik!"
let btn4 = document.createElement("button");
btn4.id = "btn4";
btn4.innerHTML = "Dodaj";
document.body.appendChild(btn4);
let containerDiv2 = document.createElement("div");
containerDiv2.id = "container2";
document.body.appendChild(containerDiv2);
containerDiv2.style.width = "100px";
containerDiv2.style.height = "100px";
containerDiv2.style.backgroundColor = "lightblue";
document.querySelector("#btn4").addEventListener("click", function (e) {
  let p = document.createElement("p");
  p.innerHTML = "Klik!";
  containerDiv2.appendChild(p);
});

// ----------------------------------------

// 14.
// Napravi input:
// <input id="input3" type="text">
//
// Pomoću addEventListener("focus", ...)
// promeni pozadinsku boju inputa
// na žutu.
let input3 = document.createElement("input");
input3.id = "input3";
input3.type = "text";
document.body.appendChild(input3);
document.querySelector("#input3").addEventListener("focus", function (e) {
  input3.style.backgroundColor = "yellow";
});

// ----------------------------------------

// 15.
// Napravi input:
// <input id="input4" type="text">
//
// Pomoću addEventListener("blur", ...)
// vrati pozadinsku boju inputa
// na belu kada izgubi fokus.
let input4 = document.createElement("input");
input4.id = "input4";
input4.type = "text";
document.body.appendChild(input4);
input4.style.backgroundColor = "yellow";
document.querySelector("#input4").addEventListener("blur", function (e) {
  input4.style.backgroundColor = "white";
});
