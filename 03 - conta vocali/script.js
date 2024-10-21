/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function vocal(str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      console.log(str[i]);
      count = count + 1;
    }
  }
  console.log(count);
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocal(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
