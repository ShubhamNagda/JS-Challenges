// Challange For Higher Order Function 

function CustomMap(Array, Callback) {
    const squredArray = [];

    for (let i = 0; i < Array.length; i++) {
        const transformValue = Callback(Array[i]);
        squredArray.push(transformValue);
    }
    return squredArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = CustomMap(numbers, num => num * 2);

console.log(evenNumbers);
