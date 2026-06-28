let listOfPlayers = [];

let name = document.getElementsByClassName("name");
let score = document.getElementsByClassName("score");


let playerNum = parseInt(prompt('Unesite 2 igraca. Ili 0 ako zelite da prekinete igru.'));

for (let i = 0; i < playerNum; i++) {

    if(playerNum === 0) {
        break;
    }else if(playerNum === 2) {

        let players = {
            name: prompt(`Igrac broj ${i + 1}: Unesite vase ime: `),
            score: 0,
        }

        listOfPlayers.push(players);

    }else{
        alert("Unesite 2 igraca samo");
    }
}

for (let i = 0; i < listOfPlayers.length; i++) {
   name[i].innerHTML = listOfPlayers[i].name;
   score[i].innerHTML = listOfPlayers[i].score;

   name[i].style.fontSize = "30px";
   score[i].style.fontSize = "30px";
}

let numOfRounds = [1,2,3,4];

let randomNum = Math.floor((Math.random() * 10) + 1);

for (let i = 0; i < numOfRounds.length; i++) {

        if(listOfPlayers.length === 0) {
            break;
        }

        let abortGame2 = parseInt(prompt("Ako zelite da prekinete igru unesite 0 ili 1 da nastavite"));

        if(abortGame2 === 0){
            break;
        }else if(abortGame2 === 1) {

            alert(`Runda ${numOfRounds[i]}`);

            for (let j = 0; j < listOfPlayers.length; j++) {

                let playerGuess = parseInt(prompt(`${listOfPlayers[j].name}: 'Unesite broj od 1 do 10. Ili 0 da prekinete odmah igru`));

                if (playerGuess === 0) {
                    break;
                }

                if (playerGuess === randomNum) {
                    listOfPlayers[j].score += playerGuess;
                    score[j].innerHTML = listOfPlayers[j].score;
                    alert(`Bravo ${listOfPlayers[j].name}: pogodili ste broj`);
                } else if (playerGuess !== randomNum) {
                    let playerGuessSecondTry = parseInt(prompt(`${listOfPlayers[j].name}. 'Poslednji pokusaj. Unesite broj od 1 do 10. Ili 0 da prekinete igru`));

                    if (playerGuess === 0) {
                        break;
                    }

                    if (playerGuessSecondTry === randomNum) {
                        listOfPlayers[j].score += 1;
                        score[j].innerHTML = listOfPlayers[j].score;
                        alert(`Bravo ${listOfPlayers[j].name}, uspeli ste iz drugog pokusaja!`);
                    } else {
                        alert('Nazalost istrosili ste sve pokusaje');
                    }
                }
            }
        }

        if (i === numOfRounds.length - 1) {
            alert("Kraj igre");
    }
}

for (let i = 0; i < listOfPlayers.length; i++) {
    console.log(name[i].innerHTML, score[i].innerHTML);
}








