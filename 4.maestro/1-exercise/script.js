//r Determina se due stringhe sono anagrammi.

const str1 = `Ciao, io sono Lollò_!-.2`;
const str2 = `Ciao, Lollo io sono@?:.3`;

const splitWordOfString = string => {

    const cleanString = string.toLowerCase().normalize(`NFD`).replace(/\W|\d|[_]/g, ``);

    const wordOfString = [];
    for (let i = 0; i < cleanString.length; i++) {
        wordOfString.push(cleanString[i]);
    }

    return wordOfString;
};

const wordCounter = string => {

    const cleanString = splitWordOfString(string);

    const countWords = {};
    const words = [];
    for (let i = 0; i < cleanString.length; i++) {

        if (countWords[cleanString[i]] === undefined) {

            words.push(cleanString[i])
            countWords[cleanString[i]] = 1
        } else {

            countWords[cleanString[i]]++
        };
    };

    return [words, countWords];
}

const areAnagrams = (str1, str2) => {

    const [words1, countWords1] = wordCounter(str1);
    const [words2, countWords2] = wordCounter(str2);

    const totalWordsOfStr1 = splitWordOfString(str1).length;
    const totalWordsOfStr2 = splitWordOfString(str2).length;

    if (totalWordsOfStr1 !== totalWordsOfStr2) return `No "${str1}" and "${str2}" are not anagrams :(`;

    for (let i = 0; i < words1.length; i++) {

        if (countWords1[words1[i]] !== countWords2[words1[i]]) return `No "${str1}" and "${str2}" are not anagrams :(`; 
    };

    return `Yes "${str1}" and "${str2}" are anagrams! :)`;
}

console.log(areAnagrams(str1, str2));