// Restituisci il k-esimo elemento più grande di un array.

const nums = [10, 2, 3, 5, 6, 20, 9, 35, 4, 7, 1, 21, 15, 13, 30, 40, 8];
const nums2 = [10, 2, 8, 1, 5];

const orderNumOfArrFromHigest = arr => {

    const orderedArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (orderedArr.length === 0) {

            orderedArr.push(arr[i]);
            continue;
        }

        for (let j = 0; j < orderedArr.length; j++) {


            if (arr[i] > orderedArr[j]) {

                orderedArr.unshift(arr[i]);
                break;

            }

            if (arr[i] < orderedArr[j] && arr[i] > orderedArr[j + 1]) {

                orderedArr.splice((j + 1), 0, arr[i])
                break;

            }

            if (arr[i] < orderedArr.at(-1)) {

                orderedArr.push(arr[i]);
                break;

            }
        }
    }

    return orderedArr;
};

const findNumWithGraduation = (arr, graduation) => {

    if (isNaN(graduation)) return `You should input a number at the second value :(`;
    if (graduation > arr.length) return `You should input a number <= ${arr.length} :(`;
    if (graduation === 0) return `You should input a number > 0 :(`;

    const cleanGraduation = graduation -1
    const orderedArr = orderNumOfArrFromHigest(arr);
    const askedNum = orderedArr[cleanGraduation];

    return askedNum;
};

console.log(findNumWithGraduation(nums2, 2));