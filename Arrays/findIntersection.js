// function intersection(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
// }
// console.log(intersection([1, 2, 3], [2, 3, 4]));

function intersection(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) {
        console.error("empty array");
    }
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArray.push(arr1[i]);
            }
        }
    }
    return newArray;
}
console.log(intersection([1, 2, 3, 5], [2, 3, 4, 5]));

// function intersection(arr1, arr2) {
//     if (arr1.length === 0 || arr2.length === 0) {
//         console.error("One or both arrays are empty");
//         return [];
//     }

//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i]) && !newArray.includes(arr1[i])) {
//             newArray.push(arr1[i]);
//         }
//     }
//     return newArray;
// }

// console.log(intersection([1, 2, 3, 5], [2, 3, 4, 5]));
