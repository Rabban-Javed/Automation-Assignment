/* 
Below is a class Calculator with four methods: add, subtract, multiply, and divide.
Use libraries like Mocha or Jest to write the test suite.
The test cases should be for below points
    - Test cases for all the methods i.e add, subtract, multiply, and divide.
    - Ensure edge cases are covered. (Divide by zero)
    - Ensure that test cases are comprehensive and cover all possible edge cases.
    - Tests should be clear, maintainable, and easy to understand following best practices.


CONSTRAINTS
=====================
    - Test should be written in seperate JavaScript file 'tests.js'

*/

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

module.exports = Calculator;

