export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

    const n:number = mergedArray.length;

    if(n === 0) {
        throw new Error('Both arrays are empty');
    }

    if ((n - 1) % 2 === 0) {
        return (mergedArray[Math.floor((n / 2))]);
    } else {
        return ((mergedArray[Math.floor((n / 2))] + mergedArray[Math.floor((n / 2) - 1)]) / 2);
    }
}