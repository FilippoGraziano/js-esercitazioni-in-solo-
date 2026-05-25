// Determina se un numero è primo.

const isPrimeNumber = (num) => {

    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrtOfNum = Math.floor(Math.sqrt(num) + 1);

    for (let i = 3; i < sqrtOfNum; i += 2) {
        if (num % i === 0) return false;
    };
    return true;
};

console.log(isPrimeNumber(3))