// JavaScript vežbe – ARRAY (osnovni nivo)

// 1. Napravi niz brojevi sa vrednostima [1, 2, 3, 4, 5].
let arrayNum = [1, 2, 3, 4, 5];

// 2. Ispiši ceo niz brojevi u konzoli.
console.log(arrayNum);

// 3. Ispiši prvi element niza brojevi.
console.log(arrayNum[0]);

// 4. Ispiši poslednji element niza brojevi.
console.log(arrayNum[4]);

// 5. Napravi niz imena sa vrednostima ["Ana", "Marko", "Jovan"].
let names = ["Ana", "Marko", "Jovan"];

// 6. Ispiši drugi element niza imena.
console.log(names[1]);

// 7. Promeni vrednost "Marko" u "Nikola" u nizu imena.
names[1] = "Nikola";
// 8. Ispiši ceo niz imena posle izmene.
console.log(names);

// 9. Napravi niz ocene sa vrednostima [5, 4, 3].
let grades = [5, 4, 3];

// 10. Ispiši zbir prve dve ocene.
let total = grades[0] + grades[1];
console.log(total);

// 11. Napravi niz gradovi = ["Beograd", "Novi Sad"].
let gradovi = ["Beograd", "Novi Sad"];

// 12. Dodaj "Niš" na kraj niza gradovi.
gradovi.push("Nis");

// 13. Ispiši niz gradovi.
console.log(gradovi);

// 14. Ukloni poslednji element iz niza gradovi.
gradovi.pop();

// 15. Ispiši niz gradovi nakon uklanjanja.
console.log(gradovi);


//     Kombinovane array vežbe

// 16. Napravi niz brojevi2 = [10, 20, 30].
let brojevi2 = [10, 20, 30];

// 17. Ispiši zbir svih elemenata niza brojevi2 (koristi indekse).
let zbirSvihElemenata = brojevi2[0] + brojevi2[1] + brojevi2[2];
console.log(zbirSvihElemenata);

// 18. Napravi niz cene = [100, 200, 300].
let cene = [100, 200, 300];

// 19. Uvećaj prvu cenu za 50 i ispiši novi niz.
cene[0] = cene[0] + 50;
console.log(cene);

// 20. Napravi niz jezici = ["HTML", "CSS", "Java"].
let jezici = ["HTML", "CSS", "Java"];
console.log(jezici);

// 21. U nizu jezici zameni "Java" sa "JavaScript".
jezici[2] = "JavaScript";

// 22. Ispiši niz jezici.
console.log(jezici);

// 23. Napravi niz statusi = [true, false, true].
let statusi = [true, false, true];

// 24. Ispiši vrednost drugog elementa niza statusi.
console.log(statusi[1]);

// 25. Napravi niz poruke = ["Zdravo", "Cao"] i ispiši obe poruke jednu ispod druge
let poruke = ["Zdravo", "Cao"];
console.log(poruke[0]);
console.log(poruke[1]);
