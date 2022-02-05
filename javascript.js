function add(...args) {
    const sumArray = Array.from(args);
    console.log(sumArray);
    const sum = sumArray.reduce((total, argument) => {
        return total + argument;
    }, 0)
    return sum;
}

function substract(...args) {
    const substractArray = Array.from(args);
    console.log(substractArray);
    const substract = substractArray.reduce((total, argument) => {
        return total - argument;
    }, (substractArray[0] * 2))
    return substract;
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

const result = document.querySelector('.result');


//buttons
let value = '';
let value2 = '';
let operand = '';
let operand2 = '';
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => {
    if (isNaN(button.value) && button.value != '.') {
        operand = button.value;
        if (operand == '=') {
            calculate();
            result.textContent = value;
            console.log(value)
        } else {
            operand2 = button.value;
            console.log("operand2" + operand2);
            result.textContent = operand2;
        }
    } else if (operand == '') {
        value = value + button.value;
        result.textContent = value;
        console.log("value" + value)
    } else if (operand != '' && operand != '=') {
        value2 = value2 + button.value;
        result.textContent = value2;;


    }
}))

//evaluate 2 numbers at a time
function calculate() {
    value = parseFloat(value);
    value2 = parseFloat(value2);


    switch (operand2) {
        case '+':
            let sum = add(value, value2);
            value = sum;
            break;
        case '-':
            let substract = substract(value, value2);
            value = substract;
            break;
        case '/':
            if (value2 == 0) {
                alert("You cannot divide by 0!");
                value = '';
                operand = '';
                value2 = '';
                break;
            } else {
                let division = divide(value, value2);
                value = division;
                break;
            }
    }
}

//erase 

const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', () => erase());

function erase() {
    result.textContent = '';
    value = '';
    value2 = '';
    operand = '';
    operand2 = '';
    console.log(erase);
}