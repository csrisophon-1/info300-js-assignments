// Chaiyalerk Srisophon

var readLineSync = require("readline-sync");

// Prompt user for how many Fibonacci numbers to generate
var n = readLineSync.questionInt("Enter how many Fibonacci numbers to generate: ");
// Fixed: originally had n < 0 which allowed 0 as input, changed to n <= 0
while (n <= 0) {
    n = readLineSync.questionInt("Invalid. Enter a number greater than 0: ");
}

// Build the Fibonacci sequence — each number is the sum of the two before it
var fib = [];
for (var i = 0; i < n; i++) {
    if (i == 0) {
        fib.push(0);
    } else if (i == 1) {
        fib.push(1);
    } else {
        // Fixed: originally wrote fib[i-1] + fib[i-3] by mistake, corrected index to fib[i-2]
        fib.push(fib[i - 1] + fib[i - 2]);
    }
}

// Filter out even numbers, keep only odds
// Fixed: originally used % 2 == 0 which was filtering evens in instead of out
var oddFib = [];
for (var i = 0; i < fib.length; i++) {
    if (fib[i] % 2 != 0) {
        oddFib.push(fib[i]);
    }
}

console.log("Full sequence: [" + fib + "]");
console.log("Odd Fibonacci numbers: [" + oddFib + "]");