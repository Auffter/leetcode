export function isPowerOfThree(n: number): boolean {

    if(n == 1) {
        return true;
    }

    // If number n is power of three, power will be an integer
    let power = (Math.log10(n) / Math.log10(3));

    if(power - Math.floor(power) !== 0) {
        return false;
    }

    return true;
}