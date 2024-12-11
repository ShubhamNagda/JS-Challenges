function applyOperation(operator, num1, num2) {
    return function () {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            default:
                return "Error: Invalid operator";
        }
    };
}

// Example usage
const add = applyOperation("+", 5, 3);
const subtract = applyOperation("-", 5, 3);
const multiply = applyOperation("*", 5, 3);
const divide = applyOperation("/", 5, 0);

console.log(add());       // Output: 8
console.log(subtract());  // Output: 2
console.log(multiply());  // Output: 15
console.log(divide());    // Output: Error: Division by zero
