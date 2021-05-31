import {GraphQLResolveInfo} from "graphql";
import {createAlerts} from "../data/records/alerts";
import {createOccupancies} from "../data/records/occupancy";
import {createIndoorAirQualities} from "../data/records/indoorAirQuality";
import {createTemperatures} from "../data/records/temperature";
import {generateSeed} from "../util/generateSeed";

/** The collection of resolvers in the Records entity */
export type RecordsResolvers = {
    [K in keyof Records]: RecordsItemResolver<Records[K]>;
}

/** The resolver used for items in the RecordsResolvers object */
export type RecordsItemResolver<Result> = (
    args: RecordsArgs,
    context: unknown,
    info: GraphQLResolveInfo
) => Result;

interface RecordsArgs {
    from: string;
    to: string;
}

/** Add StatsResolvers to an object, replacing the original. */
type WithRecordsResolvers<Type> = Omit<Type, 'records'> & {
    records?: RecordsResolvers
}

/** Remove 'records' from the passed object. */
function removeRecords<Type extends {records?: any}>(item: Type) {
    const {records, ...rest} = item;
    return rest as Omit<Type, 'records'>;
}

/**
 * Add RecordsResolvers to the passed entity
 * @link https://www.apollographql.com/docs/tutorial/resolvers/#define-other-resolvers
 */
export function addRecordsResolvers<Type>(item: Type): WithRecordsResolvers<Type>|undefined {
    if (item) {
        let result = removeRecords(item) as WithRecordsResolvers<Type>;
        result.records = {
            alerts: (args, _, info) => createAlerts(
                generateSeed(args, info), 3
            ),
            occupancies: (args, _, info) => createOccupancies(
                generateSeed(args, info), 7
            ),
            indoorAirQualities: (args, _, info) => createIndoorAirQualities(
                generateSeed(args, info)
            ),
            temperatures: (args, _, info) => createTemperatures(
                generateSeed(args, info), 1
            ),
        };
        return result;
    }
    return undefined;
}

