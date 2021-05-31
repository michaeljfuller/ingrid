/** Return a deterministic number from any string */
export function generateNumberFromString(str: string): number {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i);
    }
    return result;
}
