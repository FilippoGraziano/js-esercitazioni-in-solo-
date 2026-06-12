// Determina se un array contiene un numero specifico.

const nums = [10, 2, 3, 5, 6, 1, 9, 8, 4, 7];

const isPresent = (el, arr) => {

    for (const element of arr) {

        if (element === el) return true;
        else return false;
    }
};

console.log(isPresent(11, nums));