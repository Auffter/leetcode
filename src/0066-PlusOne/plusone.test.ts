import { plusOne } from './plusone';

describe('plusOne', () => {
    test('Example 1', () => {
        const digits = [1, 2, 3];
        const result = plusOne(digits);
        expect(result).toEqual([1, 2, 4]);
    });

    test('Example 2', () => {
        const digits = [4, 3, 2, 1];
        const result = plusOne(digits);
        expect(result).toEqual([4, 3, 2, 2]);
    });

    test('Example 3', () => {
        const digits = [9];
        const result = plusOne(digits);
        expect(result).toEqual([1, 0]);
    });

    test('Carry over multiple digits', () => {
        const digits = [9, 9, 9];
        const result = plusOne(digits);
        expect(result).toEqual([1, 0, 0, 0]);
    });

    test('Single digit zero', () => {
        const digits = [0];
        const result = plusOne(digits);
        expect(result).toEqual([1]);
    });

    test('No carry over', () => {
        const digits = [1, 2, 9];
        const result = plusOne(digits);
        expect(result).toEqual([1, 3, 0]);
    });
});