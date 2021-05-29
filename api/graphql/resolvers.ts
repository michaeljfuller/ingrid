import {infrastructure} from "./data";
import {getBuildingById, getRegionById, getFloorById, getRoomById} from "../../utils/infrastructure/getInfrastructureById";

type QueryById = (parent: unknown, args: { id: string }) => any;

// https://www.apollographql.com/docs/tutorial/resolvers/
export default {
    Query: {
        infrastructure: () => infrastructure,
        ...{
            region: (_, args) => getRegionById(infrastructure, args.id),
            building: (_, args) => getBuildingById(infrastructure, args.id),
            floor: (_, args) => getFloorById(infrastructure, args.id),
            room: (_, args) => getRoomById(infrastructure, args.id),
        } as Record<string, QueryById>,
    },
};
