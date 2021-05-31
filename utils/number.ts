/**
 * Round to the given number of places.
 * @example roundTo(123.456,  2) // 100
 * @example roundTo(123.456,  1) // 120
 * @example roundTo(123.456,  0) // 123
 * @example roundTo(123.456, -1) // 123.5
 * @example roundTo(123.456, -2) // 123.46
 */
export function roundTo(num: number, places: number): number {
    const modifier = Math.pow(10, places);
    return Math.round(num / modifier) * modifier;
}

/** Returns the percent `part` is of the `whole`. */
export function percentOf(part: number, whole: number, decimalPlaces= 0) {
    return roundTo((part/whole) * 100, -decimalPlaces);
}
