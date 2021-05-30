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

type QueryById = (parent: unknown, args: { id: string }, context: unknown, info: GraphQLResolveInfo) => any;

// https://www.apollographql.com/docs/tutorial/resolvers/
export default {
    Query: {
        infrastructure: () => addStatsResolvers(
            infrastructure
        ),
        ...{
            region: (_, args) => addStatsResolvers(
                getRegionById(infrastructure, args.id)
            ),
            building: (_, args) => addStatsResolvers(
                getBuildingById(infrastructure, args.id)
            ),
            floor: (_, args) => addStatsResolvers(
                getFloorById(infrastructure, args.id)
            ),
            room: (_, args) => addStatsResolvers(
                getRoomById(infrastructure, args.id)
            ),
        } as Record<string, QueryById>,
    },
} as Record<string, IResolvers>;
