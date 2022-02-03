function add(...args) {
    const sumArray = Array.from(args);
    console.log(sumArray);
    const sum = sumArray.reduce((total, argument) => {
        return total + argument;
    }, 0)
    return sum;
}

function substract(...args) {
    const sumArray = Array.from(args);
    console.log(sumArray);
    const sum = sumArray.reduce((total, argument) => {
        return total - argument;
    }, (sumArray[0] * 2))
    return sum;
}

function multiply(...args) {
    const sumArray = Array.from(args);
    console.log(sumArray);
    const sum = sumArray.reduce((total, argument) => {
        return total * argument;
    }, 1)
    return sum;
}

function divide(first, second) {
    return first / second;
}