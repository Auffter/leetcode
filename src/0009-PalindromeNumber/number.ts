export function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x === 0){
        return true;
    }

    let reverseNum:number = 0;
    let temp:number = x;

    while(temp !== 0){
        let remainder:number = temp % 10;
        reverseNum = reverseNum * 10 + remainder;
        temp = Math.floor(temp / 10);
        if(x === reverseNum) {
            return true;
        }
    }
    return false;
}

/*
// String conversion solution, around 2.5 times slower than the solution above
function isPalindromeToStr(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let strArr:string[] = x.toString().split('');
    let reversed: string[] = x.toString().split('').reverse();

    for(let i = 0; i< strArr.length -1; i++) {
        if(strArr[i] !== reversed[i]) {
            return false;
        }
    }
    return true;
}
 */