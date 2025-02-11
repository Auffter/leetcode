import { isPalindrome } from './number';

describe('isPalindrome', () => {
    test('Example 1', () => {
        const x = 121;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Example 2', () => {
        const x = -121;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });

    test('Example 3', () => {
        const x = 10;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });

    test('Single digit', () => {
        const x = 7;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Zero', () => {
        const x = 0;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Large palindrome number', () => {
        const x = 123454321;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('Large non-palindrome number', () => {
        const x = 123456789;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });
});