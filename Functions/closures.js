function createCounter() {
    let counter = 0; // This variable is enclosed in the returned function
    return function () {
        counter += 1; // Increment the counter
        return counter; // Return the updated value
    };
}

// Example usage:
const myCounter = createCounter();

console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3
