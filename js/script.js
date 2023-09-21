// Dichiarazione delle variabili e delle costanti
const display = document.getElementById('display'); // Riferimento all'elemento HTML per visualizzare i numeri
const message = document.getElementById('message'); // Riferimento all'elemento HTML per visualizzare i messaggi
const startButton = document.getElementById('startButton'); // Riferimento al pulsante "Avvia il gioco"

const totalNumbers = 5; // Numero totale di numeri da generare
const attesa = 3; // Tempo di attesa prima che i numeri scompaiano
let generatedNumbers = []; // Array per memorizzare i numeri generati casualmente
let userNumbers = []; // Array per memorizzare i numeri inseriti dall'utente
let guessedNumbers = []; // Array per memorizzare i numeri indovinati dall'utente

// Funzione per nascondere il pulsante di avvio
function hideStartButton() {
    startButton.style.display = 'none';
}

// Funzione per mostrare il pulsante di avvio
function showStartButton() {
    startButton.style.display = 'block';
}

// Funzione per generare 5 numeri casuali e mostrarli all'utente
function displayRandomNumbers() {
    hideStartButton(); // Nascondi il pulsante di avvio
    generatedNumbers = []; // Resetta l'array dei numeri generati

    // Genera 5 numeri casuali univoci e li aggiunge all'array
    while (generatedNumbers.length < totalNumbers) {
        const randomNumber = getRandomNumber(1, 100);
        if (!generatedNumbers.includes(randomNumber)) {
            generatedNumbers.push(randomNumber);
        }
    }

    // Visualizza i numeri generati all'utente
    display.innerHTML = generatedNumbers.join(', ');

    // Chiamiamo la funzione per far scomparire i numeri dopo 5 secondi
    setTimeout(function () {
        resetDisplay();
        // Chiamiamo la funzione per avviare i prompt dopo 0.5 secondi
        setTimeout(function () {
            getUserInput();
        }, 500);
    }, attesa * 1000);
}

// Funzione per gestire l'input dell'utente
function getUserInput() {
    userNumbers = insertNumbers(totalNumbers); // L'utente inserisce 5 numeri
    guessedNumbers = getGuessedNumbers(generatedNumbers, userNumbers); // Verifica i numeri indovinati

    // Verifica quanti numeri sono stati indovinati e visualizza il risultato
    if (guessedNumbers.length === 0) {
        message.innerHTML = "Non hai indovinato nemmeno un numero!";
    } else {
        message.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri: ${guessedNumbers.join(', ')}`;
    }

    showStartButton(); // Mostra nuovamente il pulsante di avvio
}

// Funzione per verificare quanti numeri sono stati indovinati
function getGuessedNumbers(simonNums, numbersToCheck) {
    const guessed = [];

    // Confronta i numeri generati con quelli inseriti dall'utente
    for (let i = 0; i < simonNums.length; i++) {
        const sNum = simonNums[i];
        if (numbersToCheck.includes(sNum)) {
            guessed.push(sNum); // Aggiunge i numeri indovinati all'array
        }
    }
    return guessed; // Restituisce l'array dei numeri indovinati
}

// Funzione per l'inserimento dei numeri da parte dell'utente
function insertNumbers(tot) {
    const numbers = [];
    while (numbers.length < tot) {
        let userNumber = parseInt(prompt('Inserisci un numero'));
        if (!numbers.includes(userNumber)) {
            numbers.push(userNumber); // Aggiunge i numeri inseriti dall'utente all'array
        }
    }
    return numbers; // Restituisce l'array dei numeri inseriti dall'utente
}

// Funzione per resettare la visualizzazione dei numeri
function resetDisplay() {
    display.innerHTML = ''; // Rimuove i numeri visualizzati
    message.innerHTML = ''; // Elimina la scritta del risultato precedente
}

// Funzione per generare un numero casuale compreso tra min e max (inclusi)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Aggiunta di un event listener per avviare il gioco al click del pulsante "Avvia il gioco"
startButton.addEventListener('click', function () {
    resetDisplay(); // Resetta la visualizzazione
    displayRandomNumbers(); // Avvia il gioco
});

