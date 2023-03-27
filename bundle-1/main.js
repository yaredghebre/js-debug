/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// questa funzione controlla l'eta di un utente e in base all'età (< o > di 18) da le risposte della condizione if else.
// Gli errori sono: 
// riga 16: "message" deve essere assegnato a una variabile (let) anzichè (const) in quanto varia a seconda dell'età inserita
// non certo se sia un errore: manca il campo "return" alla fine della funzione



// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// Questa funzione scorre gli elementi dell'array e stampa in console il numero degli elementi presenti
// Errore a riga 35, bisogna scrivere "length" anzichè "lenght", altrimenti la console da come risultato undefined



// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// Questa funzione serve a far inserire un numero all'utente e sommarlo a 12. 
// L'errore sta nel mancato inserimento di parseInt davanti a "prompt" a riga 47: questo da come risultato una concatenazione (stringa + 12) anziche una operazione matematica, poichè nel prompt viene inserita il numero sottoforma di stringa


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// Questa funzione serve a dare accesso a una specifica lista di utenti (definiti nell'array)
// L'errore sta nel fatto che c'è un "if" di troppo. Il codice corretto è questo qui sotto:

// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();
