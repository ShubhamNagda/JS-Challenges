let f = 0;
let s = 1;
let r = 0;
for (let i = 0; i < 10; i++) {
    console.log(r);
    r = f + s;
    s = f;
    f = r;
}


console.log("Given a number, check if it belongs to the Fibonacci sequence.");

let number = 8;
let f1 = 0, s1 = 1, r1 = 0;
let found = false;

while (r1 <= number) {
    if (number === r1) {
        found = true;
        break;
    }
    r1 = f1 + s1;
    f1 = s1;
    s1 = r1;
}

if (found) {
    console.log("Yes, the number belongs to the Fibonacci Sequence.");
} else {
    console.log("No, the number does not belong to the Fibonacci Sequence.");
}

