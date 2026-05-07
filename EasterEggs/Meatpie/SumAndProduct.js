const prompt = require("prompt-sync")()

let firstNumber = Number(prompt("Enter first number: "));
let secondNumber = Number(prompt("Enter second number: "));

let product = firstNumber * secondNumber;
let sum = firstNumber + secondNumber;

console.log("Product:", product);
console.log("Sum:", sum);
