function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function reminder(num1, num2) {
    return num1 % num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


var operatorInput = prompt("Choose any one operator from 'add', 'subtract', 'multiply', 'divide', or 'reminder': ");
operatorInput = String(operatorInput).toLowerCase(); 
var num1 = parseFloat(prompt("Enter the first Number: "));
var num2 = parseFloat(prompt("Enter the second Number: "));


var operator;
switch (operatorInput) {
    case 'add':
        operator = add;
        break;
    case 'subtract':
        operator = subtract;
        break;
    case 'multiply':
        operator = multiply;
        break;
    case 'divide':
        operator = divide;
        break;
    case 'reminder':
        operator = reminder;
        break;
    default:
        console.log("Invalid operator");
}
if(operator){
console.log(calculator(num1, num2, operator));
}
