const listaEmail = ["pippo@outlook.it", "paperino@yahoo.it", "pluto@gmail.com", "peppapig@tiscali.it"];

//Chiedi all’utente la sua email
const emailInserita = prompt("Inserisci email");

// Controlla che sia nella lista di chi può accedere
for(let i = 0; i < listaEmail.length; i ++) {

    if (listaEmail.includes(emailInserita)) {
// Stampa un messaggio appropriato sull’esito del controllo. 
        console.log("Email valida");
    } else {
        console.log("Email non valida")
    }
}