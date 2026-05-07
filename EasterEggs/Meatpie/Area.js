const prompt = require("prompt-sync")()

let length = Number(prompt("Enter a number: "));
let width = Number(prompt("Enter a number: "));

let area = length * width
console.log("The area is", area)
