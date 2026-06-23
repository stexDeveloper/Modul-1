// 1. Napravi varijablu temperatura = 28.
// Koristi if da ispišeš "Vruće" ako je > 25,
// "Umereno" ako je između 15 i 25,
// "Hladno" ako je < 15.

let temperature = 28;

if(temperature > 25){
    console.log("Vruce");
}else if(temperature >= 15 && temperature <= 25){
    console.log("Umereno");
}else if(temperature < 15){
    console.log("Hladno");
}

// 2. Napravi niz poeni = [45, 78, 90, 62].
// Koristi for + if da ispišeš "Položio" za poene >= 60
// i "Nedovoljno" za ostale.

let points = [45, 78, 90, 62];

let passPoints = [];

for(let point in points){
    if(points[point] >= 60) {
        passPoints.push("Sa poenom: " + points[point] + ". Polozeno");
    }else{
        passPoints.push("Sa poenom: " + points[point] + ". Nedovoljno");
    }
}
console.log(passPoints);

// 3. Napravi niz brojevi = [1,2,3,4,5,6,7,8,9,10].
// Koristi for loop da ispišeš samo brojeve deljive sa 3.

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let number of numbers){
    if(numbers[number] % 3 === 0){
        console.log(numbers[number]);
    }
}

// 4. Napravi niz imena = ["Ana","Marko","Jovan","Ivana"].
// Koristi for + if da ispišeš imena koja imaju 4 ili više karaktera.

let names = ["Ana","Marko","Jovan","Ivana", "Ivica", "Ivy"];

for(name in names){
    if(names[name].length > 4){
        console.log(names[name]);
    }
}

// 5. Napravi varijablu godina = 2026.
// Koristi if da proveriš da li je godina prestupna.

let year = 2024;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(year + " is leap year");
}else{
    console.log(year + " is not leap year");
}

// 6. Napravi niz ocene = [5,4,3,2,1].
// Koristi for loop da prebrojiš koliko je ocena 2.

let grades = [5,4,3,2,1,2,4,2,9,12,2];

let countGrades = 0;

for(let grade in grades){
    if(grades[grade] === 2){
        countGrades++;
    }
}
console.log("Ocena 2 se pojavljuje " + countGrades + " puta");

// 7. Napravi varijablu dan = "subota".
// Koristi switch da ispišeš "Vikend" ili "Radni dan".

let day = "subota"

switch(day){
    case "ponedeljak":
        case "utorak":
            case "sreda":
                case "cetvrtak":
                    case "petak":
                        console.log("Radni dan");
                        break;
                        case "subota":
                            case "nedelja":
                                console.log("Vikend");
                                break;
}

// 8. Napravi niz statusi = ["online","offline","offline","online"].
// Koristi for + switch da ispišeš "Aktivan"
// ili "Nije aktivan" za svaki element.

let statuses = ["online","offline","offline","online", "online", "offline", "online"];

for(status in statuses){
    switch(statuses[status]){
        case "online":
            console.log("Aktivan");
            break;
            case "offline":
                console.log("Nije aktivan");
                break;
    };
}

// 9. Napravi niz brojevi = [5,8,12,3].
// Koristi for loop da pronađeš najmanji broj.

let numbers2 = [5,8,12,1,3,1,2,90,-2,20];
let smallestNumber = numbers2[0];

for(let i = 0; i < numbers2.length; i++){
    if(smallestNumber > numbers2[i]){
        smallestNumber = numbers2[i];
    }
}
console.log("Najmanji broj u nizu je: " + smallestNumber);

// 10. Napravi niz ocene = [5,3,4,2,5].
// Koristi for loop da sabereš sve ocene i ispišeš zbir.

let grades2 = [5,3,4,2,5];
let sumOfGrades = 0;

for(grade in grades2){
    sumOfGrades += grades2[grade];
}
console.log("Suma svih ocena u nizu je: " + sumOfGrades);

// 11. Napravi varijablu vreme = "jutro".
// Koristi switch da ispišeš:
// "Dobro jutro" za "jutro",
// "Dobar dan" za "dan",
// "Laku noć" za "noc".

let time = "jutro";

switch (time){
    case "jutro":
        console.log("Dobro jutro");
        break;
        case "dan":
            console.log("Dobro dan");
            break;
            case "noc":
                console.log("Laku noc");
                break;
}

// 12. Napravi niz jezici = ["JS","HTML","CSS","Python"].
// Koristi for + switch da ispišeš puno ime jezika za svaki element.

let languages = ["JS","HTML","CSS","Python"];

for(language in languages){
    switch (languages[language]){
        case "JS":
            console.log("JavaScript");
            break;
            case "CSS":
                console.log("Cascading Style Sheets");
                break;
                case "HTML":
                    console.log("HyperText Markup Language");
                    break;
                    case "Python":
                        console.log("Python");
                        break;
    }
}

// 13. Napravi niz brojevi = [2,4,6,8,10].
// Koristi for loop da svaki broj podeliš sa 2
// i ispišeš rezultat.

let numbers3 = [2,4,6,8,10];

for(let number in numbers3){
    console.log(numbers3[number] / 2);
}

// 14. Napravi niz poruke = ["Zdravo","Ćao","Hello","Hi"].
// Koristi for + if da ispišeš poruke koje imaju više od 2 karaktera.

let messages = ["Zdravo","Cao","Hello","Hi", "Yo"];

for(message in messages){
    if(messages[message].length > 2){
        console.log(messages[message]);
    }
}

// 15. Napravi niz ulogovan = [true,false,true,false].
// Koristi for + if da ispišeš
// "Ulogovan" ili "Nije ulogovan".

let logedIn = [true,false,true,false];

for(log in logedIn){
    if(logedIn[log] === true){
        console.log("Ulogovan");
    }else{
        console.log("Nije ulogovan");
    }
}

// 16. Napravi varijablu broj = 15.
// Koristi if da ispišeš
// "Broj je deljiv sa 3"
// ili
// "Broj nije deljiv sa 3".

let number = 15;

if(number % 3 === 0){
    console.log("Broj je deljiv sa 3");
}else{
    console.log("Broj nije deljiv sa 3");
}

// 17. Napravi niz ocene = [1,2,3,4,5].
// Koristi for + if da ispišeš:
// "Odličan" za 5,
// "Dobar" za 3–4,
// "Nedovoljan" za 1–2.

let grades3 = [1,2,3,4,5];

for(let grade in grades3){
    if(grades3[grade] === 5){
        console.log("Odlican za: " + grades3[grade]);
    }else if(grades3[grade] === 3 || grades3[grade] === 4){
        console.log("Dobar za: " + grades3[grade]);
    }else if(grades3[grade] === 1 || grades3[grade] === 2){
        console.log("Nedovoljan za: " + grades3[grade]);
    }
}

// 18. Napravi niz gradovi = ["Beograd","Novi Sad","Niš","Subotica"].
// Koristi for + if da ispišeš gradove
// koji počinju slovom "N".

let cities = ["Beograd","Novi Sad","Nis","Subotica"];

for(city of cities){
    if(city.startsWith("N")){
        console.log(city);
    }
}

// 19. Napravi niz brojevi = [1,2,3,4,5].
// Koristi for loop da sabereš sve parne brojeve.

let numbers4 = [1,2,3,4,5,10];
let even = 0;

for(let number in numbers4){
    if(numbers4[number] % 2 === 0){
        even+=numbers4[number];
    }
}
console.log("Zbir parnih brojeva u nizu je: " + even);

// 20. Napravi varijablu poeni = 72.
// Koristi if + else if + else da kategorizuješ:
// "Odličan",
// "Dobar",
// "Nedovoljan".

let points2 = 72;

if(points2 === 100){
    console.log("Odlican")
}else if(points2 < 100 && points2 > 50){
    console.log("Dobar")
}else{
    console.log("Nedovoljan")
}

// 21. Napravi niz uloge = ["admin","user","guest"].
// Koristi for + switch da ispišeš:
// "Admin pristup" za "admin",
// "Korisnik" za "user",
// "Gost" za "guest".

let roles = ["admin","user","guest"];

for(role of roles){
    switch (role){
        case "admin":
            console.log("Admin");
            break;
        case "user":
                console.log("Korisnik");
                break;
        case "guest":
                console.log("Gost");
                break;
    }
}

// 22. Napravi niz brojevi = [3,7,2,8,5].
// Koristi for loop da pronađeš najveći broj.

let arrayOfNums = [3,7,2,8,5];
let biggestNum = arrayOfNums[0];

for (let i = 0; i < arrayOfNums.length; i++){
    if(biggestNum < arrayOfNums[i]){
        biggestNum = arrayOfNums[i];
    }
}
console.log("Najveci broj u nizu je: " + biggestNum);

// 23. Napravi niz temperatura = [12,25,30,18].
// Koristi for + if da ispišeš:
// "Vruće" za > 25,
// "Umereno" za 15–25,
// "Hladno" za < 15.

let temperatures = [12,25,30,18];

for (temp in temperatures){
    if(temperatures[temp] > 25){
        console.log("Za temperaturu od " + temperatures[temp] + " stepeni je vruce");
    }else if(temperatures[temp] >= 15 && temperatures[temp] <= 25){
        console.log("Za temperaturu od " + temperatures[temp] + " stepeni je umereno");
    }else{
        console.log("Za temperaturu od " + temperatures[temp] + " stepeni je hladno");
    }
}

// 24. Napravi niz poruke = ["Hello","World","JS","Bye"].
// Koristi for loop da spojiš sve poruke u jedan string.

let arrayOfMessages = ["Hello","World","JS","Bye"];
let singleMessage = "";

for(let i = 0; i<arrayOfMessages.length; i++){
    singleMessage += arrayOfMessages[i];

    if(i < arrayOfMessages.length - 1){
        singleMessage += ", ";
    }
}
console.log(singleMessage);

// 25. Napravi varijablu tip = "desktop".
// Koristi switch da ispišeš:
// "Desktop uređaj"
// ili
// "Mobilni uređaj".

let type = "desktop";

switch (type){
    case "desktop":
        console.log("Desktop uredjaj");
        break;
        case "mobile":
            console.log("Mobilni uredjaj");
            break;
}

// 26. Napravi niz brojevi = [1,2,3,4,5,6,7,8,9,10].
// Koristi for loop da ispišeš kvadrat svakog broja.

let arrayOfNums2 = [1,2,3,4,5,6,7,8,9,10];
let arrayOfPower = [];

for (let number in arrayOfNums2){
    let power = arrayOfNums2[number] * arrayOfNums2[number];
    arrayOfPower.push(power);
}
console.log(arrayOfNums2);
console.log(arrayOfPower);

// 27. Napravi niz ocene = [5,3,4,2,5,3,1].
// Koristi for loop da prebrojiš
// koliko je ocena veće ili jednake 4.

let arrayOfGrades = [5,3,4,2,5,3,1];
let numbersOfGradesBiggerThen4 = 0;

for(let number in arrayOfGrades){
    if(arrayOfGrades[number] >= 4){
        numbersOfGradesBiggerThen4++;
    }
}
console.log("Kolicina brojeva koja su veca od ili jednaka sa 4 je: " + numbersOfGradesBiggerThen4);

// 28. Napravi niz gradovi = ["Beograd","Novi Sad","Niš"].
// Koristi for + if da proveriš da li niz sadrži "Niš"
// i ispiši:
// "Pronađen Niš"
// ili
// "Niš nije pronađen".

let arrayOfCities = ["Beograd","Novi Sad","Nis"];

for(let i = 0; i < arrayOfCities.length; i++){
    if(arrayOfCities[i].includes("Nis")){
        console.log(arrayOfCities[i] + " je pronadjen");
        break;
    }

    if(i === arrayOfCities.length - 1){
        console.log("Nis nije pronadjen");
    }
}

// 29. Napravi niz brojevi = [10,20,30].
// Koristi for loop da svaki broj povećaš za 5
// i ispiši novi niz.

let arrayOfNums3 = [10,20,30];
let newArray = [];

for(let i = 0; i<arrayOfNums3.length; i++){
    newArray.push(arrayOfNums3[i] + 5);
}
console.log(newArray);

// 30. Napravi niz ocene = [5,3,4,2,5].
// Koristi for loop + if da ispišeš:
// "Odličan" za 5,
// "Dobar" za 3–4,
// "Nedovoljan" za 1–2.

let arrayOfGrades2 = [5,3,4,2,5];

for(let i = 0; i<arrayOfGrades2.length; i++){
    if(arrayOfGrades2[i] === 5){
        console.log("Odlican: " + arrayOfGrades2[i]);
    }else if(arrayOfGrades2[i] === 3 || arrayOfGrades2[i] === 4){
        console.log("Dobar: " + arrayOfGrades2[i]);
    }else if(arrayOfGrades2[grade] === 1 || arrayOfGrades2[i] === 2){
        console.log("Nedovoljan: " + arrayOfGrades2[i]);
    }
}