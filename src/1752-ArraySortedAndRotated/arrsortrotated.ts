// Still needs some work | Dosent work for all test cases

export function check(nums: number[]): boolean {

    let n:number = nums.length;

    if(n <= 2) return true;

    let biggestElement:number = nums[0];
    let biggestElementIndex:number = 0;

    for(let i = 0; i < n; i++) {
        if (nums[i] > biggestElement){
            biggestElement = nums[i];
            biggestElementIndex = i;
        }
    }

    if(biggestElement !== nums[n - 1] && nums[0] < nums[n - 1]){
        return false;
    }

    for(let i = 0; i < n - 1; i++) {
        if(biggestElement === nums[i]){
            continue;
        }
        if(nums[i] > nums[i + 1]){
            return false;
        }
    }

    return true;
}

//3 4 5 1 2
//2 1 3 4