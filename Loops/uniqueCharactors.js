function hasUniqueCharacters(str) {
    let charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) {
            return false; // Duplicate character found
        }
        charSet.add(char);
    }
    return true; // All characters are unique
}

console.log(hasUniqueCharacters("hello")); // false
console.log(hasUniqueCharacters("world")); // true
