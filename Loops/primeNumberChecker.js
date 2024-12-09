function checkPrimeNumber(num) {
    if (num <= 1) {
        return `${num} is not a prime number`; // Handle edge cases like 1 or negative numbers
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number`;
        }
    }
    return `${num} is a prime number`;
}

// Example Usage
console.log(checkPrimeNumber(7)); // 7 is a prime number
console.log(checkPrimeNumber(10)); // 10 is not a prime number

//<========================================================================================================>
console.log("Print all prime numbers between 1 and 100.");
for (let i = 2; i <= 100; i++) {
    let isPrime = true; // Assume the number is prime

    for (let j = 2; j <= Math.sqrt(i); j++) { // Check divisors up to the square root of i
        if (i % j === 0) {
            isPrime = false; // Not a prime number
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}


