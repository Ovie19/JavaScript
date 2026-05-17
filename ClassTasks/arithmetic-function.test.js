
const { add, subtract } = require('./arithmetic-function');

// Addition Tests
test("test addition of two positive numbers", () => {

    let firstNumber = 82;
    let secondNumber = 18;

    expect(add(firstNumber, secondNumber)).toBe(100)

});

test("test addition of a positive and a negative number works accurately", () => {

    let firstNumber = 82;
    let secondNumber = -18;

    expect(add(firstNumber, secondNumber)).toBe(64)

});

test("test addition of two negative numbers gives a negative number", () => {

    let firstNumber = -82;
    let secondNumber = -18;

    expect(add(firstNumber, secondNumber)).toBe(-100)

});

// Subtraction Tests
test("test subtraction of two positive numbers", () => {

    let firstNumber = 82;
    let secondNumber = 18;

    expect(subtract(firstNumber, secondNumber)).toBe(64)

});

test("test subtraction of a positive and a negative number works accurately", () => {

    let firstNumber = 82;
    let secondNumber = -18;

    expect(subtract(firstNumber, secondNumber)).toBe(100)

});

test("test subtraction of two negative numbers gives a negative number", () => {

    let firstNumber = -82;
    let secondNumber = -18;

    expect(subtract(firstNumber, secondNumber)).toBe(-64)

});