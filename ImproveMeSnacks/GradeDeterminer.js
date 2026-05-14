const prompt = require("prompt-sync")();

const determineGrade = (score) => {
    if (score < 40) return 'F';
    else if (score < 50) return 'D';
    else if (score < 60) return 'C';
    else if (score < 70) return 'B';
    else return 'A';
};

const score = Number(prompt("Enter student score: "));
const grade = determineGrade(score);
console.log(grade);