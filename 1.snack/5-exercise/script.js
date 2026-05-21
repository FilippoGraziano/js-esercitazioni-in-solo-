// Restituisci il nome più lungo da un array di stringhe.

const names = [`Anna`, `Carlo`, `Filippo`, `Gianluca`, `Anastasia`, `Filiberto`, `Andrea`, `Franco`];

const longerWord = (arr) => {
    let longerWord = ``;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longerWord.length) longerWord = arr[i];
    };
    console.log(longerWord);
    return;
};

longerWord(names);