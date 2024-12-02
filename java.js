let currentInput = ''; // stores the current input for calculation
let previousInput = ''; // stores the previous input for calculation
let currentOperation = ''; // stores the current operation (+,-,*,/)

function appendNumber(number) { 
    currentInput += number; // add number to current input
    updateDisplay(); // update display
}