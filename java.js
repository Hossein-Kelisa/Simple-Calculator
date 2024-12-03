let currentInput = ''; // Stores the current input for calculation
let previousInput = ''; // Stores the previous input for calculation
let currentOperation = ''; // Stores the current operation (+, -, *, /)

function appendNumber(number) { // To handle number inputs
    currentInput += number; // Add the number to the current input
    updateDisplay(); // Update the display
}

function operation(operator) { // To handle operation inputs
    if (currentInput === '') return; // Do nothing if no number is entered
    if (previousInput !== '') {
        calculate(); // Calculate if there's already an operation
    }
    currentOperation = operator; // Save the operation
    previousInput = currentInput; // Move current input to previous input
    currentInput = ''; // Clear current input for new entry
}

function clearDisplay() { // Clear all inputs and operation
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput); // Convert previous input to a number
    const current = parseFloat(currentInput); // Convert current input to a number

    if (isNaN(prev) || isNaN(current)) return; // Stop if inputs are invalid

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Error: Division by zero"); // Handle division by zero
                return;
            }
            result = prev / current;
            break;
        default:
            return; // Do nothing if no valid operation
    }

    currentInput = result.toString(); // Store result as the new current input
    currentOperation = ''; // Clear the operation
    previousInput = ''; // Clear the previous input
    updateDisplay(); // Update the display
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.innerText = currentInput || '0'; // Show '0' if current input is empty
}