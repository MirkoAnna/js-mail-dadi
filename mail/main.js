/*controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

const listaEmail = ["pippo@outlook.it", "paperino@yahoo.it", "pluto@gmail.com", "peppapig@tiscali.it"];

//Chiedi all’utente la sua email
let emailInserita = prompt("Inserisci email");

let corrispondente = false;

// Controlla che sia nella lista di chi può accedere
for(let i = 0; i < listaEmail.length; i ++) {

    if (emailInserita == listaEmail[i]) {
        corrispondente = true;
    }
}

if (corrispondente == true) {
    console.log("Email valida");
} else {
    console.log("Email non valida");
}