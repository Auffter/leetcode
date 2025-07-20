import { isPowerOfThree } from './powerofthree';

describe('isPowerOfThree', () => {
    it('should return true for n = 27', () => {
        expect(isPowerOfThree(27)).toBe(true);
    });

    it('should return false for n = 0', () => {
        expect(isPowerOfThree(0)).toBe(false);
    });

    it('should return false for n = -1', () => {
        expect(isPowerOfThree(-1)).toBe(false);
    });

    it('should return true for n = 1', () => {
        expect(isPowerOfThree(1)).toBe(true); // 3^0 = 1
    });

    it('should return true for n = 9', () => {
        expect(isPowerOfThree(9)).toBe(true); // 3^2 = 9
    });

    it('should return false for n = 10', () => {
        expect(isPowerOfThree(10)).toBe(false);
    });

    it('should return false for n = 1', () => {
        expect(isPowerOfThree(1)).toBe(true);
    });
});