import { lengthOfLongestSubstring } from './substringrepeat';

test('Example 1: s = "abcabcbb"', () => {
    const s = "abcabcbb";
    const result = lengthOfLongestSubstring(s);
    expect(result).toBe(3);
});

test('Example 2: s = "bbbbb"', () => {
    const s = "bbbbb";
    const result = lengthOfLongestSubstring(s);
    expect(result).toBe(1);
});

test('Example 3: s = "pwwkew"', () => {
    const s = "pwwkew";
    const result = lengthOfLongestSubstring(s);
    expect(result).toBe(3);
});