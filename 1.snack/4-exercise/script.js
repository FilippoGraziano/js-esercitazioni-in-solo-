// Conta il numero di vocali in una stringa.

const name = `Giancarlo`;

const howManyVowels = (name) => {
    const vowels = `aeiouAEIOU`;
    let arrNameVowels = [];

    for (let i = 0; i < name.length; i++) {
        
        if (vowels.includes(name[i])) arrNameVowels.push(name[i])
    };

    let nameVowels = arrNameVowels.join(", ");
    console.log(`${arrNameVowels.length} (${nameVowels})`);
    return;
};

howManyVowels(name)