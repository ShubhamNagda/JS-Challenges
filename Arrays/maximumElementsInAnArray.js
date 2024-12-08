// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([3, 1, 6, 4]));

function findMax(arr) {
    if (arr.length == 0) {
        return undefined
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let num = [1, 2, 4, 7, 9, 4, 6];

console.log(findMax(num));

