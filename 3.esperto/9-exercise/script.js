// Restituisci il numero più grande di un array.

const nums = [10, 2, 3, 5, 6, 1, 9, 8, 4, 7];

const higherNumber = arr => {

    let output = 0;
    for (const element of arr) {

        if (element > output) output = element;
    }

    return output;
};

console.log(higherNumber(nums))