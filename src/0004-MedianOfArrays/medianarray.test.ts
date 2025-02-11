import { findMedianSortedArrays } from './medianarray';

describe('findMedianSortedArrays', () => {
    test('Example 1', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(2.00000);
    });

    test('Example 2', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(2.50000);
    });

    test('Empty nums1', () => {
        const nums1: number[] = [];
        const nums2 = [1];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(1.00000);
    });

    test('Empty nums2', () => {
        const nums1 = [2];
        const nums2: number[] = [];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(2.00000);
    });

    test('Both arrays empty', () => {
        const nums1: number[] = [];
        const nums2: number[] = [];
        expect(() => findMedianSortedArrays(nums1, nums2)).toThrow();
    });

    test('Negative numbers', () => {
        const nums1 = [-5, -3, -1];
        const nums2 = [-2, -1, 0];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(-1.50000);
    });

    test('Large arrays', () => {
        const nums1 = Array.from({ length: 1000 }, (_, i) => i + 1);
        const nums2 = Array.from({ length: 1000 }, (_, i) => i + 1001);
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(1000.50000);
    });
});