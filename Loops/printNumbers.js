console.log("Print Numbers from 0 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Print Numbers from 10 to 1");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Print only even numbers from 1 to 20.");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Print only odd numbers from 1 to 20.");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}