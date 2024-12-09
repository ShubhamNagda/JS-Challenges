console.log("Calculate the sum of numbers from 1 to 100.");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


console.log("Calculate the sum of even numbers from 1 to 100.");
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum2 += i
    }
}

console.log(sum2);


console.log("Calculate the sum of odd numbers from 1 to 100.");
let sum3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        sum3 += i
    }
}

console.log(sum3);
