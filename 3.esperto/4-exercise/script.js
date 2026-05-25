// Determina se una stringa è un palindromo.

const isPalindrome = (str) => {

    const cleanStr = str.toLowerCase().replace(/[\W_]/g, ``)

    for (let i = 0; i < str.length / 2; i++) {
        if (cleanStr[i] !== cleanStr.at(-i -1)) return false;
    }

    return true;
};

console.log(isPalindrome(`I topi non avevano nipoti`))