// Determina se due array hanno gli stessi elementi.

const names = [`Anna`, `Carlo`, `Filippo`, `Gianluca`, `Anastasia`, `Filiberto`, `Andrea`, `Franco`];

const teachers = [`Carlo`, `Anna`, `Filippo`, `Filiberto`, `Anastasia`, `Gianluca`, `Andrea`, `Franco`];

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const areSame = (arr1, arr2) => {
    
    if (arr1.length !== arr2.length) return false;

    const sorted1 = [...arr1].sort()
    const sorted2 = [...arr2].sort()

    for (let i = 0; i < arr1.length; i++) {
        if (sorted1[i] !== sorted2[i]) return false;
    }

    return true;
};

console.log(areSame(names, teachers))