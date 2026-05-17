function findTheBiggestNumber(arrayOfNumbers) {

    if(!arrayOfNumbers || arrayOfNumbers.length === 0) {
        throw new Error("We need some numbers in the array!");
    }
    console.log(arrayOfNumbers);

    let biggestNumber = arrayOfNumbers[0];
    for(let i = 1; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] > biggestNumber)
        {
            biggestNumber = arrayOfNumbers[i];
        }
    }
    return biggestNumber;
}

console.log(findTheBiggestNumber([4,5,2]));
console.log(findTheBiggestNumber([3,6,1,8,3,7]));
console.log(findTheBiggestNumber([36,67,84,8,3,7]));

function findTheBiggestNumber2(arrayOfNumbers) {
    const maxNumber = Math.max(...arrayOfNumbers);
    console.log(maxNumber);
    return maxNumber;
}

console.log("findTheBiggestNumber2");

console.log(findTheBiggestNumber2([36,67,84,8,3,7]));

