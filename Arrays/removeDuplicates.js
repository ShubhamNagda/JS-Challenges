function removeDuplicates(array) {
    if (array.length == 0) {
        console.error("Array is empty");
        return [];
    }

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        // Check if the element is already in `newArray`
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let num = [1, 2, 2, 2, 2, 3, 4, 3, 5, 4, 3];
console.log(removeDuplicates(num));
