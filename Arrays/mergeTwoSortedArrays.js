function mTSE(array1, array2) {
    if (array1.length === 0 || array2.length === 0) {
        console.error("One or Both arrays are empty");
        return false;
    }

    let i = 0, j = 0; // Pointers for array1 and array2
    let sortedArr = [];

    // Merge the arrays while both have elements left
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            sortedArr.push(array1[i]);
            i++;
        } else {
            sortedArr.push(array2[j]);
            j++;
        }
    }

    // Add remaining elements from array1, if any
    while (i < array1.length) {
        sortedArr.push(array1[i]);
        i++;
    }

    // Add remaining elements from array2, if any
    while (j < array2.length) {
        sortedArr.push(array2[j]);
        j++;
    }

    return sortedArr;
}

// Test the function
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6];

console.log(mTSE(arr1, arr2));
