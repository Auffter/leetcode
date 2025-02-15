export function combinationSum(candidates: number[], target: number): number[][] {

    // Covers only few corner cases, working on better solution
    let result: number[][] = [];
    let temp:number[] = [];
    let sortedCandidates:number[] = candidates.sort((a, b) => a - b);
    let slicedCandidates:number[] = [];
    let currentTarget:number = target;

    for (let i = 0; i < sortedCandidates.length; i++) {
        if(sortedCandidates[i] <= target) {
            slicedCandidates.push(sortedCandidates[i]);
        } else {
            break;
        }
    }

    let n: number = slicedCandidates.length;

    for (let i = 0; i < n; i++) {
        temp = [];
        currentTarget = target;

        for (let j = i; j < n; j++) {
            if (currentTarget === 0) {
                break;
            }
            if(currentTarget >= slicedCandidates[j]) {
                currentTarget -= slicedCandidates[j];
                temp.push(slicedCandidates[j]);
            }
        }
        if(currentTarget === 0) {
            result.push(temp);
        }
    }
    return result;
}
