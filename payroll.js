var readLineSync = require('readline-sync');  // enable reading from the console
var employees = [];  // array to store employee objects

// collect data for 3 employees
for (var i = 1; i <= 3; i++) {
    console.log("\n--- Employee " + i + " ---");

    var name = readLineSync.question("Enter employee name: ");

    var wage = readLineSync.questionFloat("Enter hourly wage: ");
    while (wage <= 0) {
        console.log("Invalid: wage must be positive.");
        wage = readLineSync.questionFloat("Enter hourly wage: ");
    }

    var hours = readLineSync.questionFloat("Enter hours worked: ");
    while (hours < 0 || hours > 80) {
        console.log("Invalid: hours must be between 0 and 80.");
        hours = readLineSync.questionFloat("Enter hours worked: ");
    }

    // calculate regular and overtime pay
    var regularHours = 0;
    var overtimeHours = 0;
    var regularPay = 0;
    var overtimePay = 0;

    if (hours > 40) {
        regularHours = 40;
        overtimeHours = hours - 40;
        regularPay = regularHours * wage;
        overtimePay = overtimeHours * wage * 1.5;
    } else {
        regularHours = hours;
        regularPay = regularHours * wage;
    }

    var totalPay = regularPay + overtimePay;

    // store employee as an object in the array
    employees.push({ name: name, hours: hours, regularPay: regularPay, overtimePay: overtimePay, totalPay: totalPay });
}

// print the payroll report
console.log("\n===== PAYROLL REPORT =====");

var highestPaid = employees[0];

for (var i = 0; i < employees.length; i++) {
    var emp = employees[i];
    console.log("\nName: " + emp.name);
    console.log("Total Hours: " + emp.hours);
    console.log("Regular Pay: $" + emp.regularPay.toFixed(2));
    console.log("Overtime Pay: $" + emp.overtimePay.toFixed(2));
    console.log("Total Pay: $" + emp.totalPay.toFixed(2));

    if (emp.totalPay > highestPaid.totalPay) {
        highestPaid = emp;
    }
}

console.log("\n*** Highest Paid Employee: " + highestPaid.name + " ($" + highestPaid.totalPay.toFixed(2) + ") ***");