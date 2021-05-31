import {NextRouter} from "next/router";
type ParsedUrlQuery = NextRouter['query'];

/** Return a new ParsedUrlQuery with the new values. */
export default function updateParsedUrlQuery(
    query: ParsedUrlQuery,
    values: Record<string, string|undefined>,
    removeKeys: string[] = Object.keys(values)
): ParsedUrlQuery {
    const result: ParsedUrlQuery = {...query};
    removeKeys.forEach(key => delete result[key]);
    for (const [key, value] of Object.entries(values)) {
        if (value) result[key] = encodeURI(value);
    }
    return result;
}
