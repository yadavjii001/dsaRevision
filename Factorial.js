function calculateFactorial(inputNumber) {
    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero")
    }
    let result = 1;
    for(let i = 1; i <= inputNumber; i++) {
        result *= i;;
    }
    return result;
}

console.log(calculateFactorial(0));

// Approach 2 by recursion

function calculateFactorialUsingRecursion(inputNumber){
    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero");
    }

    if(inputNumber === 0 || inputNumber === 1) {
        return 1;
    }

    return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
}

console.log(calculateFactorialUsingRecursion(5));