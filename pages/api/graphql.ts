import {ApolloServer} from "apollo-server-micro";
import apolloConfig from "../../api/graphql/config";

const server = new ApolloServer(apolloConfig);
export default server.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};
