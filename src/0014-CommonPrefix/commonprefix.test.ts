
import { longestCommonPrefix } from './commonprefix';

describe('longestCommonPrefix', () => {
    test('returns "fl" for ["flower", "flow", "flight"]', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    test('returns "" for ["dog", "racecar", "car"]', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    test('returns "a" for ["a"]', () => {
        expect(longestCommonPrefix(["a"])).toBe("a");
    });

    test('returns "prefix" for ["prefix", "prefixes", "prefixation"]', () => {
        expect(longestCommonPrefix(["prefix", "prefixes", "prefixation"])).toBe("prefix");
    });

    test('returns "inter" for ["interview", "internet", "internal"]', () => {
        expect(longestCommonPrefix(["interview", "internet", "internal"])).toBe("inter");
    });

    test('returns "" for ["", "b", "c"]', () => {
        expect(longestCommonPrefix(["", "b", "c"])).toBe("");
    });

    test('returns "common" for ["commonprefix", "commonplace", "commonwealth"]', () => {
        expect(longestCommonPrefix(["commonprefix", "commonplace", "commonwealth"])).toBe("common");
    });
});