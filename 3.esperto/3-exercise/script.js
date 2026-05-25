// Filtra un array mantenendo solo i numeri pari.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = (arr) => {
    if (arr.length === 0) return [];

    const evenElement = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evenElement.push(arr[i]);
    }
    
    return evenElement;
};

console.log(evenNums(nums));