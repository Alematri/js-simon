// Dichiarazione delle variabili e delle costanti
const targetNumbers = [];
const displayTime = 5000; // 5 secondi

// Funzione per generare i numeri casuali e mostrarli all'utente
function displayRandomNumbers() {
    const numbersDiv = document.getElementById("numbers");
    numbersDiv.innerHTML = "";

    // Generiamo 5 numeri casuali e li mostriamo all'utente
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 10) + 1; // Numeri casuali da 1 a 10
        targetNumbers.push(randomNumber);
        numbersDiv.innerHTML += randomNumber + " ";
    }

    // Chiamiamo la funzione hideNumbers dopo 5 secondi
    setTimeout(hideNumbers, displayTime);
}

// Funzione per far scomparire i numeri generati casualmente
function hideNumbers() {
    const numbersDiv = document.getElementById("numbers");
    numbersDiv.innerHTML = "";
}

