/** Calls the callback `count` times and outputs the results in an array. */
export function repeat<Type = any>(
    count: number,
    callback: RepeatCallback = (index) => index+1
) {
    const result: Type[] = [];
    for (let i = 0; i < count; i++) {
        result.push(callback(i));
    }
    return result;
}
type RepeatCallback<Type = any> = (index: number) => Type;
