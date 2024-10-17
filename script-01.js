const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Grades(marks) {
    let grade;

    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 49 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks < 49) {
        grade = "D";
    } else if (marks < 40) {
        grade = "E";
    } else {
        console.log("Wrong input");
        return; 
    }

    console.log(`The grade for ${marks} is ${grade}.`);
}

rl.question("Enter marks: ", (input) => {
    let marks = parseFloat(input);
    
    if (isNaN(marks)) {
        console.log("Please enter a valid number for marks.");
    } else {
        Grades(marks);
    }
    
    rl.close(); 
});