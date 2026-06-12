// Ordina un array di numeri.

const nums = [10, 2, 3, 5, 6, 20, 9, 8, 4, 7, 1, 21, 15, 13, 30, 40, 35];

const orderNumOfArr = arr => {

    const orderedArr = [];

    for (let i = 0; i < arr.length; i++) {

        console.log(`iterazione i: ${arr[i]}`)

        if (orderedArr.length === 0) {

            console.log(`l'array è vuoto quindi ci metto dentro ${arr[i]}`)
            orderedArr.push(arr[i]);
            console.log(`questo è il nuovo array: (${orderedArr})`)
            continue;
        }

        for (let j = 0; j < orderedArr.length; j++) {

            console.log(`iterazione j: ${orderedArr[j]}`)

            if (arr[i] < orderedArr[j]) {

                console.log(`${arr[i]} è minore di ${orderedArr[j]}`)
                orderedArr.unshift(arr[i]);
                console.log(`quindi aggiungo all'inizio: iterazione di i(${arr[i]}), (${orderedArr})`)
                break;

            } else if (arr[i] > orderedArr[j] && arr[i] < orderedArr[j + 1]) {

                console.log(`${arr[i]} è maggiore di ${orderedArr[j]}, ma è anche minore di ${orderedArr[j + 1]}`)
                orderedArr.splice((j + 1), 0, arr[i])
                console.log(`quindi aggiungo in mezzo: iterazione di i(${arr[i]}), (${orderedArr})`)
                break;

            } else if (arr[i] > orderedArr.at(-1)) {

                console.log(`${arr[i]} è maggiore di ${orderedArr.at(-1)}`)
                orderedArr.push(arr[i]);
                console.log(`quindi aggiungo alla fine: iterazione di i(${arr[i]}), (${orderedArr}))`)
                break;

            } else continue;


        }
    }

    return orderedArr;
};

console.log(nums)
console.log(orderNumOfArr(nums));