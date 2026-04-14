// Chaiyalerk Srisophon
const readlineSync = require("readline-sync");

let start = readlineSync.questionInt("Enter start number: "); // Fixed: used questionInt instead of question so input is a number not a string
let end = readlineSync.questionInt("Enter end number: ");     // Fixed: same as above

let count = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {  // Fixed: used modulus (%) instead of division (/) to check even
        count += 1;     // Fixed: changed =+ to += so count actually increments
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);