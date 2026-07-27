// ====================================================
// VEŽBE – JavaScript Canvas
// ====================================================

// Napomena:
// - Ispod svake vežbe napisati traženu funkciju.
// - Ne koristiti gotova rešenja.
// - Po potrebi testirati funkcije pozivima ispod njih.

// ====================================================
// VEŽBA 1
// ====================================================

// Zadatak:
// Napravi funkciju:

//     napraviCanvas(width, height)

// Funkcija treba da:
// - kreira <canvas> element,
// - postavi zadatu širinu i visinu,
// - doda canvas u:
//     <div id="container"></div>

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------

let canvasContainer = document.getElementById("container");
function buildCanvas(width, height) {
  let canvas = document.createElement("canvas");
  canvas.id = "drawStuff";
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.style.border = "1px solid black";
  canvasContainer.appendChild(canvas);
}
buildCanvas(1600, 1200);

// ====================================================
// VEŽBA 2
// ====================================================

// Zadatak:
// Napravi funkciju:

//     crtajKrug(ctx, x, y, r, boja)

// Funkcija treba da:
// - nacrta krug na canvas-u,
// - koristi zadate koordinate,
// - koristi zadati poluprečnik,
// - koristi zadatu boju.

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
let canvas = document.getElementById("drawStuff");
let ctx = canvas.getContext("2d");

function drawCircle(ctx, x, y, r, begginerAngle, color, fullCircle = null) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, begginerAngle, fullCircle);
  ctx.fill();
}

// drawCircle(ctx, 30, 30, 5, 0, "red", (fullCircle = Math.PI * 2));
// ====================================================
// VEŽBA 3
// ====================================================

// Zadatak:
// Napravi funkciju:

//     crtajPravougaonik(ctx, x, y, width, height, boja)

// Funkcija treba da:
// - nacrta pravougaonik,
// - koristi zadate dimenzije,
// - koristi zadatu boju.

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
function drawRectangle(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}
// drawRectangle(ctx, 150, 77, 300, 200, "green");
// ====================================================
// VEŽBA 4
// ====================================================
// Zadatak:
// Napravi funkciju:

//     povecajBroj(broj)

// Funkcija treba da:
// - vrati broj uvećan za 1.

// Nakon toga:
// - pozovi funkciju,
// - rezultat iscrtaj na canvas-u koristeći fillText().

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
function increseNumber(number) {
  return number++;
}
ctx.font = "10px Verdana";
// ctx.fillText(increseNumber(5), 50, 30);
// ====================================================
// VEŽBA 5
// ====================================================

// Zadatak:
// Napravi funkciju:

//     nasumicnaBoja()

// Funkcija treba da:
// - vrati nasumičnu boju u formatu:

//     rgb(r, g, b)

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
let colors = [
  "rgb(255, 0, 0)", // red
  "rgb(0, 255, 0)", // green
  "rgb(0, 0, 255)", // blue
  "rgb(255, 255, 0)", // yellow
  "rgb(255, 165, 0)", // orange
  "rgb(128, 0, 128)", // purple
  "rgb(255, 192, 203)", // pink
  "rgb(0, 255, 255)", // cyan
  "rgb(255, 255, 255)", // white
  "rgb(0, 0, 0)", // black
];
function randomColor(colors) {
  let random = Math.floor(Math.random() * colors.length);
  for (let color in colors) {
    return colors[random];
  }
}
// console.log(randomColor(colors));
// ====================================================
// VEŽBA 6
// ====================================================

// Zadatak:
// Napravi funkciju:

//     crtajLiniju(ctx, x1, y1, x2, y2, boja)

// Funkcija treba da:
// - nacrta liniju između dve tačke,
// - koristi zadatu boju.

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
function drawLine(ctx, x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
// drawLine(ctx, 200, 100, 150, 150, "green");
// ====================================================
// VEŽBA 7
// ====================================================

// Zadatak:
// Napravi funkciju:

//     prosekNiza(niz)

// Funkcija treba da:
// - izračuna prosečnu vrednost brojeva u nizu,
// - vrati rezultat.

// Nakon toga:
// - rezultat iscrtaj na canvas-u kao tekst.

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
let array = [2, 12, 6, 22, 55, 3];
function averageNumberArray(array) {
  let averageNumber = 0;
  for (let number of array) {
    averageNumber += number;
  }
  return Math.round(averageNumber / array.length);
}
// ctx.font = "10px Verdana";
// ctx.fillText(averageNumberArray(array), 50, 50);
// ====================================================
// VEŽBA 8
// ====================================================

// Zadatak:
// Napravi funkciju:

//     crtajKombinaciju(ctx)

// Funkcija treba da:
// - nacrta tri kruga,
// - svaki krug treba da bude različite veličine,
// - svaki krug treba da bude različite boje,
// - koristiti funkcije:
//     • crtajKrug()
//     • nasumicnaBoja()

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
// drawCircle(ctx, 30, 30, 5, 0, "red", (fullCircle = Math.PI * 2));
// console.log(randomColor(colors));
function drawCombination(ctx) {
  for (let i = 1; i <= 3; i++) {
    drawCircle(
      ctx,
      30 * i,
      30 * i,
      5 * i,
      0,
      randomColor(colors),
      (fullCircle = Math.PI * 2),
    );
  }
}
// drawCombination(ctx);
// ====================================================
// VEŽBA 9
// ====================================================

// Zadatak:
// Napravi funkciju:

//     maksBroj(niz)

// Funkcija treba da:
// - pronađe najveći broj u nizu,
// - vrati taj broj.

// Nakon toga:
// - iscrtaj kvadrat čija je stranica jednaka najvećem broju.

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
let arrayOfNumbers = [33, 2, 5, 6, 22, 50];
function maxNumber(array) {
  let maxNumber = array[0];
  for (let number of array) {
    if (maxNumber < number) maxNumber = number;
  }
  return maxNumber;
}
let page = maxNumber(arrayOfNumbers);
// ctx.fillStyle = "red";
// ctx.fillRect(40, 50, page, page);
// ====================================================
// VEŽBA 10
// ====================================================

// Zadatak:
// Napravi funkciju:

//     ispisiTekst(ctx, tekst, x, y, boja)

// Funkcija treba da:
// - iscrta zadati tekst,
// - koristi zadate koordinate,
// - koristi zadatu boju,
// - vrati string sa tekstom.

// ----------------------------------------------------
// Ovde piši rešenje.
// ----------------------------------------------------
function drawText(ctx, text, x, y, color) {
  ctx.font = "8px Arial";
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}
drawText(
  ctx,
  "Zdravo Tomo! Nadam se da si zadovoljan sa vezbama kako sam ih uradio :D",
  10,
  30,
  randomColor(colors),
);
