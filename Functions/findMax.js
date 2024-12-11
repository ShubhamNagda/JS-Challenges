function findMax(arr) {
    return Math.max(...arr); // Spread operator used to pass array elements as arguments
}

let array = [1, 3, 4, 5, 9, 8, 6];
console.log(findMax(array)); // 9