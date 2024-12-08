let arr = [100, 4, 200, 2, 3, 1]
let result = []
for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
        if ((arr[i] - 1) == arr[j]) {
            result.push(arr[i])
        }
    }
}
console.log(result)