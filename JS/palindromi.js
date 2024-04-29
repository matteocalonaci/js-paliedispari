// PALINDROMA
// - Chiedere all’utente di inserire una parola.
// - Creare una funzione per capire se la parola inserita è palindroma.
// - Sono accettate solo soluzioni che fanno uso del ciclo.
// - Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.


// - Chiedere all’utente di inserire una parola.
let parola = prompt("Inserisci una parola");
console.log(parola, typeof parola);


//scomposizione della parola in caratteri
let caratteri = parola.split('');
console.log(caratteri);


//creo una versione invertita della parola
let invertita = caratteri.reverse().join('');
console.log(invertita);

//verifica se la parola è palindroma
if (parola === invertita) {
    console.log(`${parola} è una parola palindroma`)
} else {
    console.log(`${parola} non è una parola palindroma`)

}


//difinizione di funzione
function palindroma(parola) {
    for (let i = 0; parola.length / 2; i++)
        //se un caratterenon corrisponde al carattere dell'altra metà la parola non è PALINDROMA
        if (parola[i] !== parola[parola.length - i - 1]) {
            return false;
        }
    // Parola è PALINDROMA
    return true;
}
