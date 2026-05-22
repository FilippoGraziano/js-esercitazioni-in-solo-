// Determina se una stringa è vuota.

const str = `Ciao sono Filippo`

const isEmpty = (str) => {
    
    return str === `` ? true : false;
};

console.log(isEmpty(str))