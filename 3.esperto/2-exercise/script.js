// Restituisci l'indice di un elemento in un array.

const names = [`Anna`, `Carlo`, `Filippo`, `Gianluca`, `Anastasia`, `Filiberto`, `Andrea`, `Franco`];

const elementIndex = (arr, element) => {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === element.toLowerCase()) return i;
    };

    return -1;
};

console.log(elementIndex(names, `filippo`))