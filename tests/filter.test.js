import filter from '../src/filter'

// Predicate function for filtering even numbers
const isEven = (num) => num % 2 === 0;

describe('filter function', () => {
    test('filters matching elements', () => {
        expect(filter([1, 2, 3, 4, 5, 6, 7], isEven)).toEqual([2, 4, 6]);
    });
    test('returns empty array when no matcing elements are found', () => {
        expect(filter([1, 3, 5, 7, 9], isEven)).toEqual([]);
    });
    test('returns the array when all elements match', () => {
        expect(filter([2, 4, 6, 8, 10], isEven)).toEqual([2, 4, 6, 8, 10]);
    });
    test('handles empty array', () => {
        expect(filter([], isEven)).toEqual([]);
    });
    test('filters objects based on property value', () => {
        const product = [
            { name: 'Erikoiskahvi', price: 7.99 },
            { name: 'Pienpanimo-olut', price: 4.95 },
            { name: 'Maksalaatikko 5kg', price: 40.00 }
        ];

        const expected = [
            { name: 'Erikoiskahvi', price: 7.99 },
            { name: 'Pienpanimo-olut', price: 4.95 },
        ];

        const result = filter(product, (product) => product.price < 25);

        expect(result).toEqual(expected);
    });
    test('null returns empty array', () => {
        expect(filter(null)).toEqual([]);
    }); 
} )