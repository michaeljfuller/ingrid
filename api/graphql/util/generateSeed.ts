import {GraphQLResolveInfo} from "graphql";
import {getGraphPaths} from "./getPaths";
import {generateNumberFromString} from "../../../utils/string";

/** Return a deterministic number from StatsArgs and GraphQLResolveInfo */
export function generateSeed(
    args: {[key: string]: any},
    info: GraphQLResolveInfo
): number {
    return generateNumberFromString([
        ...Object.values(args).map(String),
        ...getGraphPaths(info).map(path => path.key)
    ].join());
}
