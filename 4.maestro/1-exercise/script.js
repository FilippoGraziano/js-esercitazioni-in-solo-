//r Determina se due stringhe sono anagrammi.

const str1 = `Ciao, io sono Lollo_!-.2`;
const str2 = `Ciao, Lollo io sono@?:.3`;

const splitWordOfString = string => {

    const cleanString = string.toLowerCase().replaceAll(/\W|\d|[_]/g, ``);

    const wordOfString = [];
    for (let i = 0; i < cleanString.length; i++) {
        wordOfString.push(cleanString[i]);
    }

    return wordOfString;
};

const wordCounter = string => {

    const cleanString = splitWordOfString(string);

    const count = {};
    for (let i = 0; i < cleanString.length; i++) {

        if (count[`${cleanString[i]}`] === undefined) {

            count[`${cleanString[i]}`] = 1
        } else {

            count[`${cleanString[i]}`]++
        };
    };

    return count;
}

const areAnagrams = (str1, str2) => {

    const countOfString1 = wordCounter(str1);
    const countOfString2 = wordCounter(str2);

    const alfabeto = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    return countOfString1;
}

console.log(areAnagrams(str1, str2));