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

// input: range inteso come min e max 
// Output: un numero casuale in quel range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`La CPU ha scelto:${numeroComputer}`);

// somma risultati
let risultato = sceltaUtenteNumero + numeroComputer;
console.log(`La somma è ${risultato}`);


function pariOrDispari(risultato) {

    //controllo se valore fornito sia pari o dispari
    if (risultato % 2 == 0) {
        let odd = "pari";
        return odd;
    }

    return "dispari";


}

let odd = "pari"
let even = "dispari"
// il vincitore è...
if (risultato == odd && sceltaUtente == odd) {
    console.log("HAI VINTO!");
} else if (risultato == even && sceltaUtente == even) {
    console.log("HAI VINTO!");
} else {
    console.log("HAI PERSO!");

}
