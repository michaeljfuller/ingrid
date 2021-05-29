import createServer from "../../api/graphql/createServer";

export default createServer().createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};
