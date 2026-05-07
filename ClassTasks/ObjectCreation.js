const prompt = require("prompt-sync")();

const id = Number(prompt("Enter the id: "))
const available = prompt("Enter true if available or false if not: ")
const count = Number(prompt("Enter the count: "))
const name = prompt("Enter name of book: ")
const author = prompt("Enter name of author: ")

const book = {
    id,
    available: available === "true",
    count,
    name,
    author
}

console.log(book)