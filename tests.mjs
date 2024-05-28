const { expect } = await import('chai');
import Calculator from './Calculator.js';

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    describe('add', function() {
        it('should return the sum of two positive numbers', function() {
            expect(calculator.add(1, 2)).to.equal(3);
        });

        it('should return the sum of two negative numbers', function() {
            expect(calculator.add(-1, -2)).to.equal(-3);
        });

        it('should return the sum of a positive and a negative number', function() {
            expect(calculator.add(1, -2)).to.equal(-1);
        });

        it('should return the sum of zero and another number', function() {
            expect(calculator.add(0, 5)).to.equal(5);
        });
    });

    describe('subtract', function() {
        it('should return the difference of two positive numbers', function() {
            expect(calculator.subtract(5, 3)).to.equal(2);
        });

        it('should return the difference of two negative numbers', function() {
            expect(calculator.subtract(-5, -3)).to.equal(-2);
        });

        it('should return the difference of a positive and a negative number', function() {
            expect(calculator.subtract(5, -3)). to.equal(8);
        });

        it('should return the difference of zero and another number', function() {
            expect(calculator.subtract(0, 5)).to.equal(-5);
        });
    });

    describe('multiply', function() {
        it('should return the product of two positive numbers', function() {
            expect(calculator.multiply(2, 3)).to.equal(6);
        });

        it('should return the product of two negative numbers', function() {
            expect(calculator.multiply(-2, -3)).to.equal(6);
        });

        it('should return the product of a positive and a negative number', function() {
            expect(calculator.multiply(2, -3)).to.equal(-6);
        });

        it('should return zero when multiplied by zero', function() {
            expect(calculator.multiply(0, 5)).to.equal(0);
        });
    });

    describe('divide', function() {
        it('should return the quotient of two positive numbers', function() {
            expect(calculator.divide(6, 3)).to.equal(2);
        });

        it('should return the quotient of two negative numbers', function() {
            expect(calculator.divide(-6, -3)).to.equal(2);
        });

        it('should return the quotient of a positive and a negative number', function() {
            expect(calculator.divide(6, -3)).to.equal(-2);
        });

        it('should throw an error when dividing by zero', function() {
            expect(() => calculator.divide(6, 0)).to.throw("Cannot divide by zero");
        });
    });
});
