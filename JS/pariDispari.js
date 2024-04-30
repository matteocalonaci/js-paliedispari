// PARI E DISPARI
// - L’utente sceglie su cosa puntare: pari o dispari.
// - L'utente inserisce un numero da 1 a 5.
// - Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).
// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// - Dichiariamo chi ha vinto.


// chiediamo all'utente su cosa puntare
let sceltaUtente = prompt("scegli pari o dispari")
console.log(`Hai scelto: ${sceltaUtente}`);

// chiedo all'utente un numero compreso tra 1 e 5
let sceltaUtenteNumero = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(`Hai scelto il numero:${sceltaUtenteNumero}`);


// funzione numero random per pc
let numeroComputer = getRandomNumber(1, 5);
console.log(`La CPU ha scelto:${numeroComputer}`);



// somma risultati
let somma = sceltaUtenteNumero + numeroComputer;
console.log(`La somma è ${somma}`);

//controllo se valore fornito sia pari o dispari
let risultato;
if (somma % 2 == 0) {
    risultato = "pari";
} else {
    somma = false;
}

console.log(risultato);


// il vincitore è...
if (risultato == sceltaUtente && sceltaUtente == sceltaUtente) {
    console.log("HAI VINTO!");
} else {
    console.log("HAI PERSO!");

}


// FUNZIONE

// input: range inteso come min e max 
// Output: un numero casuale in quel range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}