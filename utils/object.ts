/**
 * Iterate over the passed object and change the keys and/or values.
 * If the callback returns 'key': it's used as the new key.
 * If the callback returns 'value': it's used as the new value.
 * If the callback returns 'remove': the item is removed if true.
 */
export function mapObject<
    Result extends Record<string, any>
>(
    target: Record<string, any>,
    callback: MapObjectCallback
): Result {
    const result = {} as any;
    for (const [key, value] of Object.entries(target)) {
        const item = callback(key, value);
        if (item.remove !== true) {
            result[item.key || key] = ('value' in item) ? item.value : value;
        }
    }
    return result;
}
type MapObjectCallback = (
    value: any, key: string,
) => {
    key?: string;
    value?: any;
    remove?: boolean;
};
