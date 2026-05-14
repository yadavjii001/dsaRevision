function reverseAString(inputString) {

    if(typeof inputString !== 'string') {
        throw new Error("Only strings are allowed");
    }
    let result = "";
    for(let i = inputString.length - 1; i>=0; i--){
        result = result + inputString[i];
    }

    return result;
}

console.log(reverseAString("Ashish"));
console.log(reverseAString("Software development"));

// Approach 2
function reverseAString2(inputString) {
    const splittedInput = inputString.split('');
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    return result
}

console.log("reverseAString2");
console.log(reverseAString2("Ashish"));

// Approach 3 by using recursion

function reverseString3(str) {
  if (str === "") return "";
  return reverseString3(str.substr(1)) + str[0];
}

console.log(reverseString3("hello")); // "olleh"
