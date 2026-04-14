// Chaiyalerk Srisophon

var readLineSync = require("readline-sync");

var input = readLineSync.question("Enter a string: ");

// Convert to lowercase so 'T' and 't' count as the same letter
// Fixed: forgot this at first and was getting duplicate entries for upper and lowercase
var lower = input.toLowerCase();

var counts = [];
var letters = [];

// Loop through each character, only count letters a-z
for (var i = 0; i < lower.length; i++) {
    var ch = lower[i];
    if (ch >= "a" && ch <= "z") {
        var found = false;
        // If we've seen this letter before, increment its count
        for (var j = 0; j < letters.length; j++) {
            if (letters[j] == ch) {
                counts[j] = counts[j] + 1;
                found = true;
            }
        }
        // If it's a new letter, add it to our tracking arrays
        // Fixed: originally forgot the !found check so letters were getting added multiple times
        if (!found) {
            letters.push(ch);
            counts.push(1);
        }
    }
}

console.log("Letter frequencies:");
for (var i = 0; i < letters.length; i++) {
    console.log(letters[i] + ": " + counts[i]);
}

// Find the first letter in order of appearance that shows up more than once
// Fixed: originally used counts[i] >= 1 which returned every letter, changed to > 1
var firstRepeat = "";
for (var i = 0; i < letters.length; i++) {
    if (counts[i] > 1) {
        firstRepeat = letters[i];
        break;
    }
}

console.log("First repeated letter: " + firstRepeat);