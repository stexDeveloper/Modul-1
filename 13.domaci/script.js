/**
 * 1. Napraviti eventlistener za click unutar canvasa
 * 2. Pratiti da li je prvi click ili drugi click, na treci click resetujemo
 * 3. Uzeti pozciju na ekranu na click
 * 4. Nacrtati liniju
 */

let canvasListener = document.getElementById("drawArea");
let drawBtn = document.getElementById("drawBtn");
let deleteBtn = document.getElementById("deleteBtn");
let clickPoints = [];
let ctx = canvasListener.getContext("2d");

canvasListener.addEventListener("click", function (e) {
  let react = canvasListener.getBoundingClientRect();

  let x = e.clientX - react.left;
  let y = e.clientY - react.top;

  if (clickPoints.length <= 5) clickPoints.push({ x: x, y: y });

  if (clickPoints.length === 5) {
    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

    for (let i in clickPoints) {
      if (i === 0) continue;
      ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }
  }

  console.log(clickPoints);
});

drawBtn.addEventListener("click", function (e) {
  ctx.stroke();
});

deleteBtn.addEventListener("click", function (e) {
  for (let i of clickPoints) ctx.clearRect(i.x, i.y, 1600, 1200);

  clickPoints = [];

  console.log(clickPoints);
});
