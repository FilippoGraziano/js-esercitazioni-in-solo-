// Ordina un array di numeri.

const nums = [10, 2, 3, 5, 6, 20, 9, 8, 4, 7, 1, 21, 15, 13, 30, 40, 35];

const orderNumOfArr = arr => {

    const orderedArr = [arr[0]];

    for (let i = 0; i < arr.length; i++) {

        console.log(`iterazione i: ${arr[i]}`)

        for (let j = 0; j < orderedArr.length; j++) {

            console.log(`iterazione j: ${orderedArr[j]}`)

            if (arr[i] > orderedArr[j] && arr[i] < orderedArr[j + 1]) {

                orderedArr.splice((j + 1), 0, arr[i])
                console.log(`aggiungo alla fine o in mezzo: iterazione di i(${arr[i]}), (${orderedArr})`)
                break;

            } else if (arr[i] < orderedArr[j]) {

                orderedArr.unshift(arr[i]);
                console.log(`aggiungo all'inizio: iterazione di i(${arr[i]}), (${orderedArr})`)
                break; 

            } else if (arr[i] > orderedArr.at(-1)) {

                orderedArr.push(arr[i]);
                break;

            } else continue;

            
        }
    }

    return orderedArr;
};

console.log(nums)
console.log(orderNumOfArr(nums));