function add(...args) {
    const sumArray = Array.from(args);
    const sum = sumArray.reduce((total, argument) => {
        return total + argument;
    }, 0)
    return sum;
}

function substract(...args) {
    const substractArray = Array.from(args);
    const substract = substractArray.reduce((total, argument) => {
        return total - argument;
    }, (substractArray[0] * 2))
    return substract;
}

function multiply(...args) {
    const multiplyArray = Array.from(args);
    const multiply = multiplyArray.reduce((total, argument) => {
        return total * argument;
    }, 1)
    return multiply;
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
let dotCounter = 0;
let operandCounter = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => {
    if (isNaN(button.value) && button.value != '.') {
        operand = button.value;
        if (operand == '=') {
            calculate();
            result.textContent = value;
            operandCounter = 0;
        } else {
            if (operandCounter >= 1) {
                calculate();
                result.textContent = value;
                value2 = ''
                    //operandCounter = 0;   

            } else {
                operand2 = button.value;
                result.textContent = operand2;
                if (operandCounter = 0) { operandCounter = 1; } else { operandCounter++ };
            }

        }
    } else if (operand == '') {
        if (button.value == '.') { dotCounter++ }
        if (dotCounter >= 2) {} else {
            value = value + button.value;
            result.textContent = value;
        }
    } else if (operand != '' && operand != '=') {
        if (button.value == '.') { dotCounter++ }
        if (dotCounter >= 2) {} else {
            value = value + button.value;
            result.textContent = value;
        }
        value2 = value2 + button.value;
        result.textContent = value2;


    }
}))

//evaluate 2 numbers at a time
function calculate() {

    if (value2 == '') {
        erase();
    } else {
        value = parseFloat(value);
        value2 = parseFloat(value2);


        switch (operand2) {
            case '+':
                let sum = add(value, value2);
                value = sum;
                value2 = '';
                break;
            case '-':
                let substraction = substract(value, value2);
                value = substraction;
                value2 = '';
                break;
            case '*':
                let multiple = multiply(value, value2);
                value = multiple;
                value2 = '';
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
                    value2 = '';
                    break;
                }

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
}