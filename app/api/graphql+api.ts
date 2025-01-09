import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { createHandler } from "graphql-http/lib/use/fetch";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      greeting: {
        type: GraphQLString,
        resolve: () => "Hello from GraphQL!",
      },
    },
  }),
});

const handler = createHandler({ schema });

export function POST(req: Request) {
  return handler(req);
}
