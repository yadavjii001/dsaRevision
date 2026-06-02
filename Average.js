function calculateAverage(inputArray) {
    console.log("Input Array: ", inputArray);
    let sum = 0;
    for(let i =0 ; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    let average = sum / inputArray.length;
    return average;
    
}

console.log("average -->",calculateAverage([1,2,4]));
