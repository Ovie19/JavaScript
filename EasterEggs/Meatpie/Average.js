const prompt = require("prompt-sync")()

let numberOne = Number(prompt("Enter first number: "));
let numberTwo = Number(prompt("Enter second number: "));
let numberThree = Number(prompt("Enter Third number: "));

let sum = numberOne + numberTwo + numberThree

let average = sum / 3

console.log("The average is", average)
