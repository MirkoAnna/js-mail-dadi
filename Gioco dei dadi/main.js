// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
alert("Benvenuto al gioco dei dadi v.0.1");
let nomeGiocatore = prompt("Inserisci nome");
console.log(nomeGiocatore + " lancia i dadi...")

let punteggioGiocatore = Math.floor(Math.random() * 6 + 1);
console.log("Il punteggio di " + nomeGiocatore + " E' di: " + punteggioGiocatore);

let punteggioCpu = Math.floor(Math.random() * 6 + 1);
console.log("Il cpu lancia i dadi...");
console.log("Il punteggio CPU è di: " + punteggioCpu);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (punteggioGiocatore > punteggioCpu) {
    console.log(nomeGiocatore + " vince");
} else if (punteggioCpu > punteggioGiocatore) {
    console.log("CPU vince");
} else {
    console.log("Parità");
}