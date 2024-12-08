function findMissingNum(array) {
    if (arr.length == 0) {
        console.warn("array is empty")
    }
    let i = 0;
    while (i < array.length) {
        if (array[i] !== i + 1) {
            return i + 1
        }
        i++
    }
}

let arr = [1, 2, 3, 5]
console.log(findMissingNum(arr));
