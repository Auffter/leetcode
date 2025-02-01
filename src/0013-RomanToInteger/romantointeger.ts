export function romanToInt(s: string): number {
    const romanToInt: Map<string,number> = new Map(
        [
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]
        ]
    );

    let result:number = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal:number|undefined = romanToInt.get(s[i]);
        const nextVal:number|undefined = romanToInt.get(s[i + 1]) || 0;
        if (currentVal === undefined) continue;

        if(nextVal !== undefined && currentVal < nextVal) {
            result-= currentVal;
        } else {
            result+= currentVal;
        }
    }
    return result;
}