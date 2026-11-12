import add from '../src/add.js'

describe('add fuction', () => {
    test('adds two positive integers', () => {
        expect(add(5, 4)).toBe(9)
    });
    test('adds two negative numbers', () => {
        expect(add(-5, -2)).toBe(-7)
    });
    test('adds positive and negative values', () => {
        expect(add(-3, 4)).toBe(1)
    });
    test('adds when other operand is zero', () => {
        expect(add(6,0)).toBe(6)
    });
    // Use toBeCloseTo with floating point numbers
    test('adds two positive float numbers', () => {
        expect(add(2.2, 8.2)).toBeCloseTo(10.4)
    });
    test('adds two negative float numbers', () => {
        expect(add(-2.22, -6.00)).toBeCloseTo(-8.22)
    });
    test('adds when operand is undefined', () => {
        expect(add(1)).toBe(1)
    });
    test('default value is returned when both arguments are undefined', () => {
        expect(add()).toBe(0)
    })
})