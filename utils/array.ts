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

/** Weave items in between elements with result from the callback. */
export function weave<Type = any>(array: Type[], callback: WeaveCallback): Type[] {
    const result: Type[] = [];
    array.forEach((value, index) => {
        if (index > 0) result.push(callback(index-1));
        result.push(value);
    });
    return result;
}
export type WeaveCallback<Type = any> = (index: number) => Type;

/** If the passed index is out-of-range, wrap back around to the start of the array. */
export function getWrapped<Type=any>(index: number, array: Type[]): Type {
    return array[index % array.length];
}
