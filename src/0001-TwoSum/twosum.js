/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

let nums = [3,2,4];
let target = 6;

function twoSum(nums, target) {
    let result = [];
    let numsMap = new Map(nums.map((num, index) => [num, index]));

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(numsMap.has(diff) && numsMap.get(diff) !== i) {
            result.push(i);
            result.push(numsMap.get(diff));
            return result;
        }
    }

    /*for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }*/

    return result;
}

console.log(twoSum(nums, target));