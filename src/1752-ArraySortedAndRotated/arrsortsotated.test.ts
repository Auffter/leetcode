import { check } from './arrsortrotated';

describe('check', () => {
    test('returns true for [3, 4, 5, 1, 2]', () => {
        expect(check([3, 4, 5, 1, 2])).toBe(true);
    });

    test('returns false for [2, 1, 3, 4]', () => {
        expect(check([2, 1, 3, 4])).toBe(false);
    });

    test('returns true for [1, 2, 3]', () => {
        expect(check([1, 2, 3])).toBe(true);
    });

    test('returns true for [1, 1, 1]', () => {
        expect(check([1, 1, 1])).toBe(true);
    });

    test('returns true for [2, 3, 1, 2]', () => {
        expect(check([2, 3, 1, 2])).toBe(true);
    });

    test('returns true for [5, 1, 2, 3, 4]', () => {
        expect(check([5, 1, 2, 3, 4])).toBe(true);
    });

    test('returns false for [3, 2, 1]', () => {
        expect(check([3, 2, 1])).toBe(false);
    });

    test('returns true for [2, 2, 2, 3, 4, 2]', () => {
        expect(check([2, 2, 2, 3, 4, 2])).toBe(true);
    });

    test('returns true for [2, 2, 2, 3, 4, 1]', () => {
        expect(check([2, 2, 2, 3, 4, 1])).toBe(true);
    });

    test('returns true for [1, 1, 1, 1, 1]', () => {
        expect(check([1, 1, 1, 1, 1])).toBe(true);
    });

    test('returns true for [3, 3, 3, 1, 2, 3]', () => {
        expect(check([3, 3, 3, 1, 2, 3])).toBe(true);
    });

    test('returns true for [3, 3, 3, 1, 2, 2]', () => {
        expect(check([3, 3, 3, 1, 2, 2])).toBe(true);
    });

    test('returns true for [2, 1]', () => {
        expect(check([2, 1])).toBe(true);
    });

    test('returns false for [2, 4, 1, 3]', () => {
        expect(check([2, 4, 1, 3])).toBe(false);
    });

    test('returns false for [6, 7, 2, 7, 5]', () => {
        expect(check([6, 7, 2, 7, 5])).toBe(false);
    });
});