function calculateSimpleInterest(principle, rate, time) {
    let multiplicationResult = (principle * rate * time) / 100;
    let simpleInterest = multiplicationResult.toFixed(2);
    return simpleInterest;
}

console.log("Simple Interest -->", calculateSimpleInterest(1000, 5, 2));
