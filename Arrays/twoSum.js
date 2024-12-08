function twoSum(array, target) {
    if (array.length == 0) {
        return console.error("array is empty");
    }

    let sumIndex = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                sumIndex.push(i)
                sumIndex.push(j)
                return sumIndex;
            }
        }
    }
    return console.log("Values Not Found Sorry")
}

console.log(twoSum([2, 7, 11, 15], 9))