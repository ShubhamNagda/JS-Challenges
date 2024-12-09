console.log("Calculate the factorial of a given number.");

let num = 5;
let factorial = 1;
for (let i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
