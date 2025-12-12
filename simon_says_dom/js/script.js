//salvo l'array in una costante
const arrayRandomGame = arrayWithRandomNumbers(1, 50, 5);

//Definisco i numeri e li "inietto" in pagina
const randomNumbers = document.getElementById("numbers-list");
//Alla luce del fatto che senza ciclo mi inseriva tutti i numeri in un unico li ho fatto un
//ciclo per far sì che ogni elemento dell'array venisse inserito in un li esclusivo
for (let index = 0; index < arrayRandomGame.length; index++) {
  randomNumbers.innerHTML += `<li> ${arrayRandomGame[index]} </li>`;
}

//Faccio partire un timer che nel mentre continua a verdersi in pagina e
// al termine del quale spariscono i numeri e si mostrano gli input

//Definisco la mia varabiale per un output del countdown
const outputCounter = document.getElementById("countdown");
let seconds = 3;

const timer= setInterval( function() {
    if(seconds===0){
        clearInterval(timer)
    }
    else{
        seconds--;
    console.log(seconds)
    }
}, 1000);




setTimeout(function () {
  const input = document.getElementById("answers-form").classList.remove("d-none");
  randomNumbers.classList.add("d-none");
}, 3000);


//-Definire una funzione che mi generi numeri random

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funzione in cui pusho i numeri in un array vuoto come descritto nel mdù
function arrayWithRandomNumbers(minNum, maxNum, totNum) {
  const randomNumArray = [];

  while (randomNumArray.length < totNum) {
    const randomNum = genRandomNumber(minNum, maxNum);

    if (!randomNumArray.includes(randomNum)) {
      randomNumArray.push(randomNum);
    }
  }

  return randomNumArray;
}
