/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const result = []
// Dichiara la funzione qui.
function atLetter(array, lett = "") {
    const lettera = array[i];
    for (let i = 0; i < array.length; i++){
        if (lettera.charAt(0).toLowerCase() === lett.toLowerCase()) {
          result.push(lett)
        }
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(atLetter(names, "A"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]