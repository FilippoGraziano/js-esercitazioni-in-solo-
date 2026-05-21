// Restituisci un'array con le iniziali di ogni nome in un array di stringhe.

const names = [`Anna`, `Carlo`, `Filippo`, `Gianluca`];

const firstLetter = (arr) => {
    const firstLetter = [];
    for (let i = 0; i < arr.length; i++) {
        firstLetter.push(arr[i][0])
    }
    console.log(firstLetter)
    return;
};

firstLetter(names)