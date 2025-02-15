import { combinationSum } from './combination';

describe('combinationSum', () => {
    test('Example 1', () => {
        const candidates = [2, 3, 6, 7];
        const target = 7;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([[2, 2, 3], [7]]);
    });

    test('Example 2', () => {
        const candidates = [2, 3, 5];
        const target = 8;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
    });

    test('Single candidate equals target', () => {
        const candidates = [5];
        const target = 5;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([[5]]);
    });

    test('Multiple candidates, no valid combinations', () => {
        const candidates = [3, 4, 5];
        const target = 2;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([]);
    });

    test('Multiple candidates, multiple valid combinations', () => {
        const candidates = [2, 3, 4];
        const target = 6;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([[2, 2, 2], [2, 4], [3, 3]]);
    });
});