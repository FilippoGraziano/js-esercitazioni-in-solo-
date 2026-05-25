# palestra!

## snack
1. Data una stringa e un nome, restituisci un saluto personalizzato. (Complete)
2. Restituisci un'array con le iniziali di ogni nome in un array di stringhe. (Complete)
3. Filtra un array di nomi mantenendo solo quelli che iniziano con una lettera specifica. (Complete)
4. Conta il numero di vocali in una stringa. (Complete)
5. Restituisci il nome più lungo da un array di stringhe. (Complete)

## umano
1. Determina se un numero è pari. (Complete)
2. Determina se una stringa è vuota. (Complete)
3. Restituisci la lunghezza di una stringa. (Complete)
4. Restituisci il doppio di un numero. (Complete)
5. Determina se un numero è positivo. (Complete)
6. Concatena due stringhe. (Complete)
7. Determina se un array è vuoto. (Complete)
8. Restituisci il primo elemento di un array. (Complete)
9. Restituisci la somma di due numeri. (Complete)
10. Restituisci il valore assoluto di un numero. (Complete)

## esperto
1. Determina se un numero è primo. (Complete)
2. Restituisci l'indice di un elemento in un array. (Complete)
3. Filtra un array mantenendo solo i numeri pari. (Complete)
4. Determina se una stringa è un palindromo. (Complete)
5. Restituisci la somma di tutti gli elementi di un array. (Complete)
6. Determina se due array hanno gli stessi elementi. (Complete)
7. Raddoppia ogni elemento di un array.
8. Ordina un array di numeri.
9. Restituisci il numero più grande di un array.
10. Determina se un array contiene un numero specifico.

## maestro
1. Determina se due stringhe sono anagrammi.
2. Restituisci il k-esimo elemento più grande di un array.
3. Determina se un numero è un numero di Fibonacci.
4. Restituisci le coppie di elementi di un array che sommano a un target.
5. Determina se un array può essere partizionato in due sottoinsiemi con somma uguale.
6. Restituisci il massimo prodotto di due numeri in un array.
7. Restituisci la lunghezza della sottosequenza più lunga crescente.
8. Ordina un array di stringhe alfabeticamente ignorando maiuscole/minuscole.
9. Restituisci la somma massima di una sottosequenza contigua.
10. Restituisci il primo numero non ripetuto in un array.

## mostro finale
1. Restituisci il numero di modi per salire n gradini prendendo 1 o 2 gradini per volta.
2. Restituisci la distanza minima tra due stringhe contando i caratteri da cambiare.
3. Restituisci il numero di modi per fare cambio da un importo con monete date.
4. Determina se è possibile costruire una parola usando le lettere di un array di stringhe.
5. Restituisci la lunghezza del sottovettore più lungo con somma uguale a k.
6. Restituisci il numero di cammini distinti da (0,0) a (m,n) in una griglia.
7. Determina se è possibile suddividere un array in due sottoinsiemi di somma uguale.
8. Restituisci tutti i sottoinsiemi di un array.
9. Restituisci il numero minimo di operazioni per trasformare una stringa in un'altra.
10. Determina se è possibile raggiungere l'ultima posizione di un array con salti limitati.




## palestra rusult

## umano result
/** Determina se un numero è pari. */
const isEven = (num) => { };
console.assert(isEven(4), "4 dovrebbe essere pari");
console.assert(!isEven(3), "3 non dovrebbe essere pari");
console.assert(isEven(0), "0 dovrebbe essere pari");
/** Determina se una stringa è vuota. */
const isEmpty = (str) => { };
console.assert(isEmpty(""), "stringa vuota dovrebbe tornare true");
console.assert(!isEmpty("ciao"), "stringa non vuota dovrebbe tornare false");
/** Restituisci la lunghezza di una stringa. */
const stringLength = (str) => { };
console.assert(stringLength("ciao") === 4, "lunghezza di 'ciao' è 4");
console.assert(stringLength("") === 0, "lunghezza di stringa vuota è 0");
/** Restituisci il doppio di un numero. */
const double = (num) => { };
console.assert(double(5) === 10, "doppio di 5 è 10");
console.assert(double(0) === 0, "doppio di 0 è 0");
/** Determina se un numero è positivo. */
const isPositive = (num) => { };
console.assert(isPositive(5), "5 è positivo");
console.assert(!isPositive(-3), "-3 non è positivo");
console.assert(!isPositive(0), "0 non è positivo");
/** Concatena due stringhe. */
const concatenate = (str1, str2) => { };
console.assert(concatenate("ciao", "mondo") === "ciaomondo", "concatenazione di 'ciao' e 'mondo'");
console.assert(concatenate("", "test") === "test", "concatenazione con stringa vuota");
/** Determina se un array è vuoto. */
const isArrayEmpty = (arr) => { };
console.assert(isArrayEmpty([]), "array vuoto dovrebbe tornare true");
console.assert(!isArrayEmpty([1, 2]), "array non vuoto dovrebbe tornare false");
/** Restituisci il primo elemento di un array. */
const first = (arr) => { };
console.assert(first([1, 2, 3]) === 1, "primo elemento di [1,2,3] è 1");
console.assert(first([5]) === 5, "primo elemento di [5] è 5");
/** Restituisci la somma di due numeri. */
const sum = (a, b) => { };
console.assert(sum(3, 4) === 7, "somma di 3 e 4 è 7");
console.assert(sum(-2, 5) === 3, "somma di -2 e 5 è 3");
/** Restituisci il valore assoluto di un numero. */
const absolute = (num) => { };
console.assert(absolute(-5) === 5, "assoluto di -5 è 5");
console.assert(absolute(3) === 3, "assoluto di 3 è 3");
console.assert(absolute(0) === 0, "assoluto di 0 è 0");

## esperto result
/** Determina se un numero è primo. */
const isPrime = (num) => { };
console.assert(isPrime(2), "2 è primo");
console.assert(isPrime(17), "17 è primo");
console.assert(!isPrime(1), "1 non è primo");
console.assert(!isPrime(4), "4 non è primo");
/** Restituisci l'indice di un elemento in un array. */
const indexOf = (arr, element) => { };
console.assert(indexOf([1, 2, 3], 2) === 1, "indice di 2 in [1,2,3] è 1");
console.assert(indexOf([5, 10, 15], 5) === 0, "indice di 5 in [5,10,15] è 0");
console.assert(indexOf([1, 2, 3], 99) === -1, "elemento non trovato dovrebbe tornare -1");
/** Filtra un array mantenendo solo i numeri pari. */
const filterEven = (arr) => { };
console.assert(JSON.stringify(filterEven([1, 2, 3, 4])) === JSON.stringify([2, 4]), "filtrando [1,2,3,4] restituisce [2,4]");
console.assert(JSON.stringify(filterEven([1, 3, 5])) === JSON.stringify([]), "filtrando [1,3,5] restituisce []");
/** Determina se una stringa è un palindromo. */
const isPalindrome = (str) => { };
console.assert(isPalindrome("aba"), "'aba' è un palindromo");
console.assert(!isPalindrome("abc"), "'abc' non è un palindromo");
console.assert(isPalindrome("a"), "'a' è un palindromo");
/** Restituisci la somma di tutti gli elementi di un array. */
const sumArray = (arr) => { };
console.assert(sumArray([1, 2, 3]) === 6, "somma di [1,2,3] è 6");
console.assert(sumArray([10, 20]) === 30, "somma di [10,20] è 30");
console.assert(sumArray([]) === 0, "somma di array vuoto è 0");
/** Determina se due array hanno gli stessi elementi. */
const arraysEqual = (arr1, arr2) => { };
console.assert(arraysEqual([1, 2, 3], [1, 2, 3]), "[1,2,3] e [1,2,3] sono uguali");
console.assert(!arraysEqual([1, 2], [2, 1]), "[1,2] e [2,1] non sono uguali");
console.assert(arraysEqual([], []), "array vuoti sono uguali");
/** Raddoppia ogni elemento di un array. */
const doubleArray = (arr) => { };
console.assert(JSON.stringify(doubleArray([1, 2, 3])) === JSON.stringify([2, 4, 6]), "raddoppiando [1,2,3] restituisce [2,4,6]");
console.assert(JSON.stringify(doubleArray([5])) === JSON.stringify([10]), "raddoppiando [5] restituisce [10]");
/** Ordina un array di numeri. */
const sort = (arr) => { };
console.assert(JSON.stringify(sort([3, 1, 2])) === JSON.stringify([1, 2, 3]), "ordinando [3,1,2] restituisce [1,2,3]");
console.assert(JSON.stringify(sort([5])) === JSON.stringify([5]), "ordinando [5] restituisce [5]");
/** Restituisci il numero più grande di un array. */
const max = (arr) => { };
console.assert(max([1, 5, 3]) === 5, "massimo di [1,5,3] è 5");
console.assert(max([10]) === 10, "massimo di [10] è 10");
/** Determina se un array contiene un numero specifico. */
const includes = (arr, num) => { };
console.assert(includes([1, 2, 3], 2), "[1,2,3] contiene 2");
console.assert(!includes([1, 2, 3], 5), "[1,2,3] non contiene 5");