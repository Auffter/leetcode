import { isArraySpecial } from './specialarray';

describe('isArraySpecial', () => {
    test('returns true for array with one element', () => {
        expect(isArraySpecial([1])).toBe(true);
    });

    test('returns true for array with alternating parity', () => {
        expect(isArraySpecial([2, 1, 4])).toBe(true);
    });

    test('returns false for array with consecutive odd numbers', () => {
        expect(isArraySpecial([4, 3, 1, 6])).toBe(false);
    });

    test('returns false for array with consecutive even numbers', () => {
        expect(isArraySpecial([2, 4, 6])).toBe(false);
    });

    test('returns true for array with alternating odd and even numbers', () => {
        expect(isArraySpecial([1, 2, 3, 4])).toBe(true);
    });

    test('returns true for empty array', () => {
        expect(isArraySpecial([])).toBe(true);
    });
});