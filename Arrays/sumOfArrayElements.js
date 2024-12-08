// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4]));


function sumOfArray(array) {
    if (array.length == 0) {
        return undefined
    }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

let num = [1, 2, 4, 6, 9]
let sum = sumOfArray(num)

console.log(sum);
