//salvo l'array in una costante
const arrayRandomGame= arrayWithRandomNumbers(1, 50, 5); 

//Definisco i numeri e li "inietto" in pagina
const randomNumbers= document.getElementById("numbers-list")

for (let index = 0; index < arrayRandomGame.length; index++) {
    randomNumbers.innerHTML+=`<li> ${arrayRandomGame[index]} </li>`
}












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
