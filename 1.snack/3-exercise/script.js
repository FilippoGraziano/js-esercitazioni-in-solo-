// Filtra un array di nomi mantenendo solo quelli che iniziano con una lettera specifica.

const names = [`Anna`, `Carlo`, `Filippo`, `Gianluca`, `Anastasia`, `Filiberto`, `Andrea`, `Franco`];

const wordsWithThisLetter = (arr, letter) => {
    const letterUpperCase = letter.toUpperCase();
    const words = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === letterUpperCase) words.push(arr[i]);
    };
    console.log(words);
    return;
}

wordsWithThisLetter(names, `f`)