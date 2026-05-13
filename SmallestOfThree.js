function smallestOfThree(a,b,c) {
    if(a < b && a < c){
        return a;
    }
    else if(b < a && b < c) {
        return b;
    }
    else if(c < a && c < b) {
        return c;
    }
    return a
}

console.log(smallestOfThree(3,1,6));
console.log(smallestOfThree(-1,-6,9));
console.log(smallestOfThree(3,3,3));

function smallestOfThree2(a, b, c) {
    let smallestNumber = a;
    if(b < smallestNumber) {
        smallestNumber = b;
    }
    if(c < smallestNumber) {
        smallestNumber = c;
    }

    return smallestNumber;
}

console.log("second approach -->",smallestOfThree(3,1,6));
console.log("second approach -->",smallestOfThree(-1,-6,9));
console.log("second approach -->",smallestOfThree(3,3,3));