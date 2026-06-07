// Osnovne JavaScript vežbe – VARIJABLE

// 1. Napravi varijablu ime = "Ana" i ispiši je u konzoli.
let ime = "Ana"
console.log(ime);

// 2. Napravi varijablu godine = 20 i ispiši je.
let godine = 20;
console.log(godine);

// 3. Napravi varijablu jeStudent = true i ispiši je.
let jeStudent = true;
console.log(jeStudent);

// 4. Napravi varijablu grad = "Beograd" i ispiši poruku
// Živim u gradu Beograd.
let grad = "Beograd";
console.log("Zivim u gradu " + grad);

// 5. Spoji string "Zovem se " i varijablu ime i ispiši rezultat.
let myNameIs = "Zovem se " + ime;
console.log(myNameIs);


//////////////////////////////////////////////////////////////////

// Brojevi i math operatori

// 6. Napravi varijable a = 10 i b = 5.
let a = 10;
let b = 5;

// 7. Ispiši zbir brojeva a + b.
console.log(a+b);

// 8. Ispiši razliku brojeva a - b.
console.log(a-b);

// 9. Ispiši proizvod brojeva a * b.
console.log(a*b);

// 10. Ispiši količnik brojeva a / b.
console.log(b/b);

// 11. Ispiši ostatak pri deljenju a % b.
console.log(b%b);

// 12. Povećaj vrednost varijable a za 1 i ispiši novu vrednost.
a = a + 1;
console.log(a);

// 13. Smanji vrednost varijable b za 1 i ispiši novu vrednost.
b = b - 1;
console.log(b);

// 14. Napravi varijablu x = 3 i y = 4, ispiši (x + y) * 2.
let x = 3;
let y = 4;
let total = (x + y) * 2;
console.log(total);



//////////////////////////////////////////////////////////////////

// String vežbe + replace()

// 15. Napravi string "Učim programiranje" i ispiši ga.
let ucim = "Ucim programiranje";
console.log(ucim);

// 16. U stringu "Ucim programiranje" zameni programiranje sa kodiranje.
ucim = ucim.replace("programiranje", "kodiranje");
console.log(ucim);

// 17. Napravi string "Danas je lep dan" i ispiši ga.
let danas = "Danas je lep dan";
console.log(danas);

// 18. U stringu "Danas je lep dan" zameni lep sa sunčan.
danas = danas.replace("lep", "suncan");
console.log(danas);

// 19. Napravi string "Moje ime je Ana" i ispiši ga.
let mojeIme = "Moje ime je Ana";
console.log(mojeIme);

// 20. U stringu "Moje ime je Ana" zameni Ana sa Marko.
mojeIme = mojeIme.replace("Ana", "Marko");
console.log(mojeIme);



//////////////////////////////////////////////////////////////////

// Kombinovane vežbe

// 21. Napravi varijablu poruka = "Učim osnove JavaScript" i ispiši je.
let message = "Ucim osnove JavaScript"
console.log(message);

// 22. U stringu "Učim osnove JavaScript" zameni osnove sa napredne.
message = message.replace("osnove", "napredne");
console.log(message);

// 23. Napravi varijablu broj = 10 i ispiši
// Vrednost broja je 10.
let broj = 10;
console.log(broj);

// 24. Spoji string "Imam " + godine + " godina" i ispiši.
let spoji = "Imam " + godine + " godina";
console.log(spoji);

// 25. Napravi varijablu jeOnline = false i ispiši je.
let jeOnline = false;
console.log(jeOnline);

// 26. Napravi varijable c = 7 i d = 2, ispiši njihov zbir.
let c = 7;
let d = 2;
let zbir = c + d;
console.log(zbir);

// 27. Napravi string "JavaScript je zabavan" i ispiši ga.
let js = "JavaScript je zabavan";
console.log(js);

// 28. U stringu "JavaScript je zabavan" zameni zabavan sa koristan.
js = js.replace("zabavan", "koristan");
console.log(js);

// 29. Napravi varijablu rezultat = c * d i ispiši je.
let result = c * d;
console.log(result);

// 30. Spoji string "Rezultat je " i varijablu rezultat i ispiši.
let resultIs = "Rezultat je " + result;
console.log(resultIs);