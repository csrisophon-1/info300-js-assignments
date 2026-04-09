var readLineSync = require('readline-sync');  // enable reading from the console

var currentAverage = readLineSync.questionFloat("Enter your current average: ");
while (currentAverage < 0 || currentAverage > 100) {
    console.log("Invalid: average must be between 0 and 100.");
    currentAverage = readLineSync.questionFloat("Enter your current average: ");
}

var scores = [];  // array to store hypothetical final exam scores
var keepGoing = true;

// collect hypothetical final exam scores
while (keepGoing) {
    var score = readLineSync.questionFloat("Enter a hypothetical final exam score (or -1 to stop): ");

    if (score == -1) {
        keepGoing = false;
    } else if (score < 0 || score > 100) {
        console.log("Invalid: score must be between 0 and 100.");
    } else {
        scores.push(score);
    }
}

// calculate and print results for each score
console.log("\n===== GRADE FORECAST REPORT =====");

for (var i = 0; i < scores.length; i++) {
    var finalScore = scores[i];
    var courseAverage = (currentAverage * 0.75) + (finalScore * 0.25);  // 25% weight for final
    var letterGrade = "";

    if (courseAverage > 89.5) {
        letterGrade = "A";
    } else if (courseAverage > 79.5) {
        letterGrade = "B";
    } else if (courseAverage > 69.5) {
        letterGrade = "C";
    } else if (courseAverage > 59.5) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    var trend = "";
    if (courseAverage > currentAverage) {
        trend = "Improved";
    } else if (courseAverage < currentAverage) {
        trend = "Declined";
    } else {
        trend = "Stayed the same";
    }

    console.log("\nFinal Exam Score: " + finalScore);
    console.log("Course Average: " + courseAverage.toFixed(2));
    console.log("Letter Grade: " + letterGrade);
    console.log("Trend: " + trend);
}