import {GraphQLResolveInfo} from "graphql";

export type GraphPath = GraphQLResolveInfo['path'];

/** Return a flat array of GraphPath. */
export function getGraphPaths(info: GraphQLResolveInfo): GraphPath[] {
    return _getGraphPathsRecursive(info.path, []);
}

function _getGraphPathsRecursive(path: GraphPath, current: GraphPath[]): GraphPath[] {
    current.unshift(path);
    if (path.prev) _getGraphPathsRecursive(path.prev, current);
    return current;
}
