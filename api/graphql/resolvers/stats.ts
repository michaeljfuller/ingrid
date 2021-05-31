import {GraphQLResolveInfo} from "graphql";
import {
    createCleaningRating,
    createHealthRating, createIndoorAirQualityRating, createLightRating, createNoiseRating,
    createOccupancyRating,
    createSatisfactionRating,
    createTemperatureRating
} from "../data/stats";
import {dateFromISO} from "../../../utils/date";
import {getGraphPaths} from "../util/getPaths";
import {generateNumberFromString} from "../../../utils/string";

/** The collection of resolvers in the Stats entity */
export type StatsResolvers = {
    [K in keyof Stats]: StatsItemResolver<Stats[K]>;
}

/** The resolver used for items in the StatsResolvers object */
export type StatsItemResolver<Result> = (
    args: StatsArgs,
    context: unknown,
    info: GraphQLResolveInfo
) => Result;
interface StatsArgs {
    from: string;
    to: string;
}

/** Add StatsResolvers to an object, replacing the original. */
type WithStatsResolvers<Type> = Omit<Type, 'stats'> & {
    stats?: StatsResolvers
}

/** Remove 'stats' from the passed object. */
function removeStats<Type extends {stats?: any}>(item: Type) {
    const {stats, ...rest} = item;
    return rest as Omit<Type, 'stats'>;
}

/**
 * Add StatsResolvers to the passed entity
 * @link https://www.apollographql.com/docs/tutorial/resolvers/#define-other-resolvers
 */
export function addStatsResolvers<
    Type extends Infrastructure|Region|Building|Floor|Room|undefined
>(item: Type): WithStatsResolvers<Type>|undefined {
    if (item) {
        let result = removeStats(item) as WithStatsResolvers<Type>;
        result.stats = {
            health: (args, _, info) => createHealthRating(
                generateSeed(args, info)
            ),
            satisfaction: (args, _, info) => createSatisfactionRating(
                generateSeed(args, info)
            ),
            temperature: (args, _, info) => createTemperatureRating(
                generateSeed(args, info)
            ),
            occupancy: (args, _, info) => createOccupancyRating(
                generateSeed(args, info)
            ),
            indoorAirQuality: (args, _, info) => createIndoorAirQualityRating(
                generateSeed(args, info)
            ),
            noise: (args, _, info) => createNoiseRating(
                generateSeed(args, info)
            ),
            light: (args, _, info) => createLightRating(
                generateSeed(args, info)
            ),
            cleaning: (args, _, info) => createCleaningRating(
                generateSeed(args, info)
            ),
        };
        return result;
    }
    return undefined;
}

/** Return a deterministic number from StatsArgs and GraphQLResolveInfo */
function generateSeed(args: StatsArgs, info: GraphQLResolveInfo) {
    const from = dateFromISO(args.from);
    const to = dateFromISO(args.to);
    const pathKeys = getGraphPaths(info).map(path => path.key);
    return to.valueOf() - from.valueOf() + generateNumberFromString(pathKeys.join());
}
