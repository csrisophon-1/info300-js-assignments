// Chaiyalerk Srisophon

var readLineSync = require("readline-sync");

// Prompt user for a valid number between 1 and 1000
var n = readLineSync.questionInt("Enter a positive number (n <= 1000): ");
// Fixed: originally used question() which returned a string, switched to questionInt()
while (n <= 0 || n > 1000) {
    n = readLineSync.questionInt("Invalid. Enter a positive number (n <= 1000): ");
}

// Check each number from 2 to n to see if it's prime
var primes = [];
for (var i = 2; i <= n; i++) {
    var isPrime = true;
    // If i is divisible by anything other than 1 and itself, it's not prime
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}

console.log("Primes up to " + n + ": [" + primes + "]");

// Loop through consecutive prime pairs to find the largest gap and total gaps
var largestGap = 0;
var gapStart = 0;
var gapEnd = 0;
var totalGaps = 0;

for (var i = 0; i < primes.length - 1; i++) {
    var gap = primes[i + 1] - primes[i];
    totalGaps = totalGaps + gap;
    // Fixed: originally used >= which broke the tie rule, changed to > to keep first occurrence
    if (gap > largestGap) {
        largestGap = gap;
        gapStart = primes[i];
        gapEnd = primes[i + 1];
    }
}

// Average gap = total of all gaps divided by number of gaps
// Fixed: was dividing by primes.length which was off by one, needed primes.length - 1
var avgGap = totalGaps / (primes.length - 1);

console.log("The largest gap is " + largestGap + ", between " + gapStart + " and " + gapEnd);
console.log("The average gap is " + avgGap.toFixed(2));