/*
Example 1:
Input: nums = [1]
Output: true
Explanation:
There is only one element. So the answer is true.

Example 2:
Input: nums = [2,1,4]
Output: true
Explanation:
There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

Example 3:
Input: nums = [4,3,1,6]
Output: false
Explanation:
nums[1] and nums[2] are both odd. So the answer is false.
 */

let nums:number[] = [2,1,4];

export function isArraySpecial(nums: number[]): boolean {
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] % 2 === nums[i + 1] % 2) {
            return false;
        }
    }
    return true;
}
console.log(isArraySpecial(nums));