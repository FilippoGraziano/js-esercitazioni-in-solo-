// Restituisci la somma di tutti gli elementi di un array.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arraySum = (arr) => {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
};

console.log(arraySum(nums))