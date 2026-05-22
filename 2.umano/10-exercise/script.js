// Restituisci il valore assoluto di un numero.

const absoluteValue = (num) => {
    if (num < 0) return num * (-1);
    return num;
};


console.log(`This is a function. Result: ${absoluteValue(-100)}`);
console.log(`Thi is a method. Rusult: ${Math.abs(-10)}`)