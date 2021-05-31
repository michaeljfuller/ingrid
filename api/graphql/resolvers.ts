import {IResolvers} from "apollo-server-micro"
import {GraphQLResolveInfo} from "graphql";
import {infrastructure} from "./data";
import {
    getBuildingById,
    getRegionById,
    getFloorById,
    getRoomById
} from "../../utils/infrastructure/getInfrastructureById";
import {addStatsResolvers} from "./resolvers/stats";
import {addRecordsResolvers} from "./resolvers/records";

type QueryById = (parent: unknown, args: { id: string }, context: unknown, info: GraphQLResolveInfo) => any;

// https://www.apollographql.com/docs/tutorial/resolvers/
export default {
    Query: {
        infrastructure: () => addResolversToInfrastructure(
            infrastructure
        ),
        ...{
            region: (_, args) => addResolversToInfrastructure(
                getRegionById(infrastructure, args.id)
            ),
            building: (_, args) => addResolversToInfrastructure(
                getBuildingById(infrastructure, args.id)
            ),
            floor: (_, args) => addResolversToInfrastructure(
                getFloorById(infrastructure, args.id)
            ),
            room: (_, args) => addResolversToInfrastructure(
                getRoomById(infrastructure, args.id)
            ),
        } as Record<string, QueryById>,
    },
} as Record<string, IResolvers>;

function addResolversToInfrastructure<
    Type extends Infrastructure|Region|Building|Floor|Room|undefined
>(item: Type) {
    return addStatsResolvers(
        addRecordsResolvers(
            item
        )
    );
}
