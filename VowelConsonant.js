
function CalculateVowelAndConsonants(inputString){
    console.log(inputString);
    inputString = inputString.toLowerCase();
    inputString = inputString.replaceAll(' ','')
    console.log("inputString-->",inputString);
    
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonantCount = 0;
    for(let i = 0; i < inputString.length; i++) {
        if(vowels.includes(inputString[i]))
        {
            vowelCount++;
        }
        else if (consonants.includes(inputString[i]))
        {
            consonantCount++;
        }
        else {
            console.log(inputString[i], "Is neither vowel nor consonants");
            
        }
    }
    return { vowelCount, consonantCount};
}

// console.log(CalculateVowelAndConsonants("Hello World"));
console.log(CalculateVowelAndConsonants("Hello World World"));
