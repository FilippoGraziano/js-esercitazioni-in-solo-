// Raddoppia ogni elemento di un array.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleElements = (arr) => {

    const doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArr.push(arr[i] * 2);
    }
    return doubledArr;
};

console.log(doubleElements(nums))