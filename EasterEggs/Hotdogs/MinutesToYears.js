const prompt = require("prompt-sync")();

const minutes = Number(prompt("Enter number of minutes: "));

const totalDays = Math.trunc(minutes / 1440);
const years = Math.trunc(totalDays / 365);
const remainingDays = totalDays % 365;

console.log(`${minutes} minutes = ${years} years and ${remainingDays} days.`);