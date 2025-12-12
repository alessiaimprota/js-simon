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
let seconds = 5;

const timer = setInterval(function () {
  outputCounter.innerText = seconds;
  if (seconds === 0) {
    clearInterval(timer);
    outputCounter.classList.add("d-none");
    document.getElementById("answers-form").classList.remove("d-none");
    randomNumbers.classList.add("d-none");
  } else {
    seconds--;
  }
  console.log(timer);
}, 1000);

//confrontare i numeri dati dall'utente con il valore con i numeri generati random
const form = document.querySelector("form");
const inputUserArray = [];
const result= []
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = document.querySelectorAll(".form-control");

  for (let index = 0; index < inputs.length; index++) {
    console.log(inputs[index]);
    inputUserArray.push(inputs[index].value);
  }

  //Creo un altro array che contiene le parole in comune tra i due array
    for (let index = 0; index < inputUserArray.length; index++) {
        if((arrayRandomGame).includes(parseInt(inputUserArray[index]))){
            result.push(inputUserArray[index])
        }   
    }
    
    let message = document.getElementById("message")

    if(result.length===arrayRandomGame.length){
        message.innerText=`Bravo! Hai indovinato ${result.length} numeri! ${result}`
        message.classList.remove("text-danger")
        message.classList.add("text-success")
    }
    else if(result.length<arrayRandomGame.length && result.length!==0){
        message.innerText=`Hai indovinato ${result.length} numeri! ${result}`
        message.classList.remove("text-danger")
        message.classList.add("text-secondary")
    }
    else{
         message.innerText=`Hai indovinato ${result.length} numeri!`}
});


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
