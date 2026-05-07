const prompt = require("prompt-sync")()

number = prompt("Enter a number: ")

if(number < 0)
    console.log("Number is negative")
else if(number > 0)
    console.log("Number is positive")
else
    console.log("Number equals zero")