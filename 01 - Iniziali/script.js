/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstLetter(n) {
  let nameList = [];
  for (let i = 0; i < n.length; i++) {
    nameList.push(n[i].charAt(0));
  }
  return nameList;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names))
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
