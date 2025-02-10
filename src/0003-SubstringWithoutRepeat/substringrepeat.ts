export function lengthOfLongestSubstring(s: string): number {

    let map:Map<string, number> = new Map();
    let maxLength:number = 0;
    let prevElement:number = 0;

    for (let i = 0; i < s.length; i++) {
        const c:string = s[i];

        if(map.has(c) && (map.get(c) ?? 0) >= prevElement) {
            prevElement = (map.get(c) ?? 0) + 1;
        }

        maxLength = Math.max(maxLength, i - prevElement + 1);

        map.set(c, i);
    }
    return maxLength;
}
