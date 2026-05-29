function isPalindrome(inputString) {

    for(let i = 0; i <= inputString.length / 2; i++) {
        if(inputString[i] !== inputString[inputString.length - 1 - i ]) {
            return false;
        }
    }
    return true;
}

console.log("ashish", isPalindrome("ashish"));
console.log("madam", isPalindrome("madam"));

function isPalindrome2(inputString) {

    inputString = inputString.toLowerCase();
    let start = 0;
    let end = inputString.length - 1;
    for(start, end; start < end; start++, end--) {
        // console.log(inputString[start], inputString[end]);
        if(inputString[start] !== inputString[end]) {
            return false;
        }
    }
    return true;
}

console.log("ashish -->", isPalindrome2("ashish"));
console.log("madam -->", isPalindrome2("madam"));
console.log("Abba -->", isPalindrome2("Abba"));

function isPalindrome3(inputString) {
    inputString = inputString.toLowerCase();
    console.log(inputString);
}

function isPalindrome3(inputString) {
    inputString = inputString.toLowerCase();
    const splittedInput = inputString.split('');
    console.log(splittedInput);
    const reversedInput = splittedInput.reverse();
    const reversedString = reversedInput.join('');

    if(inputString === reversedString) {
        return true;
    }
    else{
        return false;
    }
}

console.log("ashish 3-->", isPalindrome2("ashish"));
console.log("madam 3-->", isPalindrome2("madam"));
console.log("Abba 3-->", isPalindrome2("Abba"));