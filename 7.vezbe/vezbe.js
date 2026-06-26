// ==========================================
// DOM VEŽBE
// querySelector, getElementById,
// getElementsByClassName, innerText, innerHTML
// ==========================================

// 1. Napravi HTML element:
// <p id="paragraf1">Hello</p>
// Pomoću getElementById ispiši njegov tekst u konzoli.
let paragraph = document.getElementById("paragraph");
console.log(paragraph.textContent);

// 2. Napravi HTML element:
// <p class="tekst">JavaScript</p>
// Pomoću getElementsByClassName ispiši tekst u konzoli.

let text = document.getElementsByClassName("tekst");
console.log(text[0].textContent);

// 3. Napravi HTML element:
// <h1 id="naslov">Naslov</h1>
// Pomoću querySelector("#naslov") promeni tekst u "Novi Naslov".

let title = document.querySelector("#naslov");
title.innerHTML = "Novi Naslov";

// 4. Napravi HTML element:
// <div class="box">Stari sadržaj</div>
// Pomoću querySelector(".box") promeni innerText u "Novi sadržaj".

let box = document.querySelector(".box");
box.innerHTML = "Novi sadrzaj";

// 5. Napravi HTML element:
// <p id="par1">Test</p>
// Promeni innerHTML u:
// <strong>Bold Test</strong>

let par = document.getElementById("par1");
par.innerHTML = "Bold test";
par.style.fontWeight = "bold";

// 6. Napravi HTML elemente:
// <p class="item">Prvi</p>
// <p class="item">Drugi</p>
// Koristi getElementsByClassName da promeniš tekst prvog elementa
// u "Prvi Promenjen".

let item = document.getElementsByClassName("item");
item[0].innerHTML = "Prvi Promenjen";

// 7. Napravi HTML element:
// <div id="glavni">Stari div</div>
// Pomoću getElementById dodaj novi tekst "Dodato"
// na postojeći tekst.

let glavni = document.getElementById("glavni");
glavni.innerHTML += " Glavni";

// 8. Napravi HTML:
// <ul>
//   <li class="lista">Jabuka</li>
//   <li class="lista">Banana</li>
// </ul>
// Pomoću getElementsByClassName promeni drugi li u "Kruška".

let list = document.getElementsByClassName("lista");
list[0].innerHTML = "Kruska";

// 9. Napravi HTML element:
// <p class="para">Hello</p>
// Pomoću querySelector promeni boju teksta na crveno.

let para = document.querySelector(".para");
para.style.color = "red";

// 10. Napravi HTML element:
// <div id="box">Stari</div>
// Pomoću innerHTML ubaci:
// <p>Novi paragraf</p>

let old = document.getElementById("box");
old.innerHTML = "<p>Novi paragraf</p>";

// 11. Napravi HTML element:
// <p id="tekst">Stari tekst</p>
// Pomoću querySelector dodaj " + dodatak"
// na postojeći tekst.

let extra = document.querySelector("#tekst");
extra.innerHTML += " dodatak";

// 12. Napravi HTML elemente:
// <div class="card">Card 1</div>
// <div class="card">Card 2</div>
// Pomoću getElementsByClassName promeni oba elementa
// da imaju tekst "Promenjeno".

let card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; i++) {
    card[i].innerHTML = "Promenjeno " + (i + 1);
}

// 13. Napravi HTML element:
// <span id="broj">10</span>
// Pomoću getElementById povećaj broj za 5
// i ispiši rezultat u konzoli.

let number = document.getElementById("broj");
let parseNumber = parseInt(number.textContent) + 5;
console.log(parseNumber);

// 14. Napravi HTML element:
// <p class="opis">Stara opis</p>
// Pomoću querySelector promeni tekst u "Nova opis".

let description = document.querySelector(".opis");
description.innerHTML = "Novi opis";

// 15. Napravi HTML element:
// <div id="sadrzaj">Tekst</div>
// Pomoću innerHTML ubaci:
// <ul>
//   <li>Prvi</li>
//   <li>Drugi</li>
// </ul>

let content = document.getElementById("sadrzaj");
content.innerHTML = "<ul><li>Prvi</li> <li>Drugi</li> </ul>";

// 16. Napravi HTML elemente:
// <p class="para">Paragraf 1</p>
// <p class="para">Paragraf 2</p>
// Pomoću getElementsByClassName promeni oba elementa
// da pišu "Promenjeno".

let para1 = document.getElementsByClassName("para");
for (let i = 0; i < para1.length; i++) {
    para1[i].innerHTML = "Promenjeno";
}

// 17. Napravi HTML element:
// <h2 id="naslov2">Stari naslov</h2>
// Pomoću querySelector promeni tekst na
// "Novi naslov 2".

let title2 = document.querySelector("#naslov2");
title2.innerHTML = "Novi Naslov 2";

// 18. Napravi HTML elemente:
// <div class="box">Box1</div>
// <div class="box">Box2</div>
// Pomoću getElementsByClassName promeni samo drugi
// u "Box2 Promenjen".

let box2 = document.getElementsByClassName("box");
for(let i = 0; i < box2.length; i++) {
    if(box2[i].textContent === "Box2"){
        box2[i].innerHTML = "Box2 Promenjen";
        break;
    }
}

// 19. Napravi HTML element:
// <p id="para2">Tekst</p>
// Pomoću innerText dodaj " + dodatni tekst".

let para3 = document.getElementById("para2");
para3.innerHTML += " dodatni text";

// 20. Napravi HTML element:
// <div id="glavniDiv">Stari div</div>
// Pomoću innerHTML ubaci:
// <h3>Novi naslov</h3>

let glavniDiv = document.getElementById("glavniDiv");
glavniDiv.innerHTML = "<h3>Novi naslov</h3>";

// 21. Napravi HTML elemente:
// <span class="item">1</span>
// <span class="item">2</span>
// Pomoću getElementsByClassName promeni brojeve
// na "10" i "20".

let spanItem = document.getElementsByClassName("item2");
for (let i = 0; i < spanItem.length; i++) {
    let spanNum = (i + 1) * 10;
    spanItem[i].innerHTML = spanNum;
}

// 22. Napravi HTML element:
// <p id="poruka">Staro</p>
// Pomoću querySelector promeni boju teksta na plavo.

let message = document.querySelector("#poruka");
message.style.color = "blue";

// 23. Napravi HTML element:
// <div class="kartica">Kartica 1</div>
// Pomoću innerHTML dodaj:
// <p>Opis kartice</p>

let cardDescription = document.querySelector(".kartica");
cardDescription.innerHTML = "<p>Opis kartice</p>";

// 24. Napravi HTML element
// <p class="test">Hello</p>
// Pomoću querySelector dodaj " World"
// na postojeći tekst.

let hello = document.querySelector(".test");
hello.innerHTML +=  " World!";

// 25. Napravi HTML element:
// <div id="glavniBox">Sadržaj</div>
// Pomoću innerHTML ubaci:
// <ul>
//   <li>A</li>
//   <li>B</li>
// </ul>

let glavniBox = document.getElementById("glavniBox");
glavniBox.innerHTML +=  "<ul><li>A</li> <li>B</li></ul>";

// 26. Napravi HTML elemente:
// <p class="para">Par 1</p>
// <p class="para">Par 2</p>
// <p class="para">Par 3</p>
// Pomoću getElementsByClassName promeni tekst svih elemenata
// na "Promenjeno".

let money = document.getElementsByClassName("para3");
for (let i = 0; i < money.length; i++) {
    money[i].innerHTML = "Promenjeno " + (i + 1);
}

// 27. Napravi HTML element:
// <span id="broj2">5</span>
// Pomoću innerText dodaj +10
// i ispiši rezultat u konzoli.

let idNum = document.getElementById("broj2");
let parseIdNum = parseInt(idNum.textContent) + 10;
console.log(parseIdNum);

// 28. Napravi HTML element:
// <div class="card">Card</div>
// Pomoću innerHTML ubaci:
// <h2>Naslov</h2>
// <p>Opis</p>

let card2 = document.querySelector(".card2");
card2.innerHTML = "<h2>Naslov</h2>" + "<p>Opis</p>";

// 29. Napravi HTML element:
// <p id="tekst2">Hello</p>
// Pomoću querySelector promeni veličinu fonta na 24px.

let tekst2 = document.querySelector("#tekst2");
tekst2.style.fontSize = "24px";

// 30. Napravi HTML elemente:
// <div class="item">Staro</div>
// <div class="item">Staro</div>
// Pomoću getElementsByClassName promeni prvi u "Prvi"
// a drugi u "Drugi".

let item3 = document.getElementsByClassName("item3");
for (let i = 0; i < item3.length; i++) {
    let userInput = prompt("Unesite za prvi 'Prvi', a za drugi unesite 'Drugi");
    switch (i) {
        case 0:
            item3[i].innerHTML = "Prvi";
            break;
        case 1:
            item3[i].innerHTML = "Drugi";
            break;
    }
}