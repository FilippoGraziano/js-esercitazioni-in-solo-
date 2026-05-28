// Ordina un array di numeri.

const nums = [10, 2, 3, 5, 6, 1, 9, 8, 4, 7];

const orderNums = arr => {

    if (arr.length === 0) return [];

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j <= newArr.length; j++) {

            if (j === newArr.length) {
                
                newArr.push(arr[i])
                break;
            };

            if (arr[i] < newArr[j]) {
                
                newArr.splice(j, 0, arr[i])
                break;
            };
        }
        
    }

    return newArr;
};

console.log(orderNums(nums))