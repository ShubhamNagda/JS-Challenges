
// function reverseArray(array) {
//     if (array.length == 0) {
//         return undefined
//     }
//     return array.reverse();
// }
// let nums = [2, 3, 6, 5, 8]
// console.log(reverseArray(nums))


function reverseArray(array) {
    if (array.length == 0) {
        return undefined
    }
    let reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i])
    }
    return reversedArray
}
let nums = [2, 3, 6, 5, 8]
console.log(reverseArray(nums))
