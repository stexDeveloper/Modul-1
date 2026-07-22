// ==========================================
// VEŽBE – FUNKCIJE (JavaScript)
// ==========================================

// 1. Napravi funkciju saberi(a, b)
//    ➜ Vraća zbir dva broja.
let a = 5;
let b = 4;
function saberiDvaBroja(a, b) {
  return a + b;
}
console.log(saberiDvaBroja(a, b));
// 2. Napravi funkciju umnozi(a, b)
//    ➜ Vraća proizvod dva broja.
let umnoziA = 5;
let umnoziB = 4;
function umnozi(umnoziA, umnoziB) {
  return umnoziA * umnoziB;
}
console.log(umnozi(umnoziA, umnoziB));
// 3. Napravi funkciju prosek(niz)
//    ➜ Vraća prosečnu vrednost niza brojeva.
let arrayProsek = [2, 1, 1, 4, 2, 299];
function prosek(array) {
  let average = 0;
  for (let num of array) {
    average += num;
  }
  return average / array.length;
}
console.log(prosek(arrayProsek));
// 4. Napravi funkciju maks(niz)
//    ➜ Vraća najveći broj iz niza.
let maxArray = [2, 1, 1, 4, 2, 299];
function max(array) {
  let maxNum = array[0];
  for (let num of array) {
    if (maxNum < num) {
      maxNum = num;
    }
  }
  return maxNum;
}
console.log(max(maxArray));
// 5. Napravi funkciju min(niz)
//    ➜ Vraća najmanji broj iz niza.
let minArray = [2, 1, 1, 4, 2, 299];
function min(array) {
  let minNum = array[0];
  for (let num of array) {
    if (minNum > num) {
      minNum = num;
    }
  }
  return minNum;
}
console.log(min(minArray));
// 6. Napravi funkciju duzinaStringa(str)
//    ➜ Vraća broj karaktera u stringu.
let str = "Kako si sta ima?";
function stringLength(str) {
  return str.length;
}
console.log(stringLength(str));
// 7. Napravi funkciju parnost(broj)
//    ➜ Vraća "paran" ili "neparan" u zavisnosti od broja.
let evenNumber = 8;
function even(num) {
  return num % 2 === 0 ? "Paran broj" : "Neparan broj";
}
console.log(even(evenNumber));
// 8. Napravi funkciju pozdrav(ime)
//    ➜ Vraća tekst: "Zdravo, Ime!".
let name = "Stefan";
function helloName(name) {
  return `Zdravo ${name}`;
}
console.log(helloName(name));
// 9. Napravi funkciju kvadrat(broj)
//    ➜ Vraća kvadrat prosleđenog broja.
let squareNumber = 33;
function square(num) {
  return num * num;
}
console.log(square(squareNumber));
// 10. Napravi funkciju obrniString(str)
//     ➜ Vraća string obrnutim redosledom.
let string = "Cao, sta ima?";
function reversString(str) {
  let splitStr = str.split("");
  let newStringArray = [];
  for (let i = splitStr.length; i >= 0; i--) {
    newStringArray.push(splitStr[i]);
  }
  return newStringArray.join("");
}
console.log(reversString(string));

function easierStringRevers(str) {
  return str.split("").reverse().join("");
}
console.log(easierStringRevers(string));
// 11. Napravi funkciju sumaParnih(niz)
//     ➜ Vraća zbir samo parnih brojeva iz niza.
let arrayOfNumbers = [3, 1, 2, 4, 8, 88, 23, 24];
function sumOfEven(array) {
  let sum = 0;
  for (let num of array) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
}
console.log(sumOfEven(arrayOfNumbers));
// 12. Napravi funkciju brojNeparnih(niz)
//     ➜ Vraća broj neparnih brojeva u nizu.
let arrayOfNumbers2 = [3, 1, 7, 4, 8, 88, 23, 24];
function numOfOddNumbers(array) {
  let numberOfOdd = 0;
  for (let num of array) {
    if (num % 2 !== 0) numberOfOdd++;
  }
  return numberOfOdd;
}
console.log(numOfOddNumbers(arrayOfNumbers2));
// 13. Napravi funkciju najcesciElement(niz)
//     ➜ Vraća element koji se najviše puta pojavljuje u nizu.
let arrayOfNumbers3 = [3, 3, 1, 7, 4, 4, 8, 88, 4, 23, 24];
function frequentElement(array) {
  let count = 0;
  let frequentNumberObject = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
      if (array[i] === array[j]) count++;
      if (j === array.length) {
        frequentNumberObject[`Number: ${array[i]}`] = count;
        count = 0;
      }
    }
  }
  let objectKeys = Object.keys(frequentNumberObject);
  let objectValues = Object.values(frequentNumberObject);
  let frequentNumber = objectValues[0];
  for (let num of objectValues) {
    if (frequentNumber < num) frequentNumber = objectKeys[num];
  }
  return `Element koji se najvise ponavlja je: ${frequentNumber}`;
}
console.log(frequentElement(arrayOfNumbers3));
// 14. Napravi funkciju slovoUMax(str, slovo)
//     ➜ Vraća koliko puta se dato slovo pojavljuje u stringu.
let stringOfWords = "Sta se radi, senjore";
let char = "i";
function letterMax(str, char) {
  let array = str.split("");
  let count = 0;
  for (let c of array) {
    if (c.toLowerCase() === char) count++;
  }
  return `Slovo ${char.toUpperCase()} se ponavlja ${count} puta`;
}
console.log(letterMax(stringOfWords, char));
// 15. Napravi funkciju ispisiUloge(uloge)
//     ➜ Vraća niz stringova: "Admin", "User", "Guest"
//       prema ulaznom nizu.
let arrayOfRoles = [
  prompt("Unesi rolu: Admin"),
  prompt("Unesi rolu: User"),
  prompt("Unesi rolu: Guest"),
];
function writeRoles(array) {
  return array;
}
console.log(writeRoles(arrayOfRoles));
// 16. Napravi funkciju duzinaNiza(niz)
//     ➜ Vraća broj elemenata u nizu.
let arrayOfElements = [3, 3, 1, 7, 4, 4, 8, 88, 4, 23, 24];
function arrayLength(array) {
  return array.length;
}
console.log(arrayLength(arrayOfElements));
// 17. Napravi funkciju proveriPrvi(niz, broj)
//     ➜ Vraća true ako je prvi element jednak broju,
//       u suprotnom false.
let arrayOfNumbers4 = [3, 3, 1, 7, 4, 4, 8, 88, 4, 23, 24];
function checkArray(array, number) {
  for (let num of array) {
    if (number === num)
      return `Broj iz niza ${num} je jednak izabranom broju ${number}`;
  }
}
console.log(checkArray(arrayOfNumbers4, 3));
// 18. Napravi funkciju srednjaVrednost(niz)
//     ➜ Vraća srednji element niza
//       (za niz sa neparnim brojem elemenata).
let arrayOfNumbers5 = [3, 3, 1, 7, 4, 233, 8, 88, 4, 23, 24];
function middleValue(array) {
  let middleNumber = Math.trunc(array.length / 2);
  let findMiddleOddNum;
  for (let i = 0; i <= Math.trunc(array.length / 2); i++) {
    if (array[i] % 2 !== 0 && Math.trunc(i) === middleNumber)
      findMiddleOddNum = array[i];
  }
  return `Srednji neparni broj iz niza je ${findMiddleOddNum}`;
}
console.log(middleValue(arrayOfNumbers5));
// 19. Napravi funkciju ispisiParneString(niz)
//     ➜ Vraća string:
//       "Parni brojevi su: X, Y, Z"
//       za sve parne brojeve u nizu.
let arrayOfNumbers6 = [3, 3, 1, 7, 4, 233, 8, 88, 4, 23, 24];
function evenNumbers(array) {
  let arrayEven = [];
  for (let num of array) {
    if (num % 2 === 0) arrayEven.push(num);
  }
  return `Parni brojevi su: ${arrayEven}`;
}
console.log(evenNumbers(arrayOfNumbers6));
// 20. Napravi funkciju spojiImena(niz)
//     ➜ Vraća string svih imena iz niza
//       spojenih zarezom.
let names = ["Marko", "Ana", "Jovan", "Milica", "Nikola"];
function conncatNames(array) {
  return `String sa imenima iz niza: ${array.join(",")}`;
}
console.log(conncatNames(names));
