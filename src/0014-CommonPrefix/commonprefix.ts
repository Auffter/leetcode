export function longestCommonPrefix(strs: string[]): string {
    let result:string = "";

    if (strs.length === 1) {
        return strs[0];
    }

    for (let i = 0; i < strs[0].length; i++) {
        const temp:string = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== temp) {
                return result;
            }
        }
        result += temp;
    }
    return result;
}