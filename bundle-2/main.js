/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// questo ciclo FOR non produrrà nulla (ma non darà neanche errore), perchè la condizione ">" è sbagliata, dovrebbe essere "<" visto che se i = 0 e 0 non è maggiore di 5, dunque non avremo il risultato sperato (ovvero tutti i numeri compresi tra 0 e 4)



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// questa funzione serve a sommare 5 a un risulato qualora esso sia "pari" quindi divisibile per 2. L'errore sta nela sintassi del moduloa riga 23, non deve essere = il che stabilisce un assegnazione, ma bensì === il quale stabilisce uguaglianza.



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// anche in questa funzione, che serve a scorrere gli elementi con il ciclo FOR, l'errore sta nella sintassi dentro la (). Al posto delle virgole, vanno i ;


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]

// codice corretto:

// function displayEvenNumbers(numbers) {
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumbers = displayEvenNumbers(numbers);
// console.log(evenNumbers);

// LA FUNZIONE serve a inserire i numeri pari dell'array e utilizzarli fuori dalla funzione

// ERRORI: 
// - riga 43 (la variabile con array dei numeri andrebbe fuori dalla funzione)
// - riga 46 (dopo numbers va messo [i] per accedere ai valori inseriti)
// - riga 47 (stessa cosa, dopo il push (numbers di i [i])
// - riga 45 (il ; dopo i++ va tolto);
// - riga 46 (= anzichè ===);
// - riga 49 (il return va fuori dal ciclo FOR)
// - riga 42 e 52 (nella funzione dobbiamo inserire come argomento la variabile con l'array dei numeri (numbers))
// - per vederli stampati in log, va inserito come argomento la nuova variabile evenNumbers (come a riga 68)