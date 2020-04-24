import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';

import { SchemaType, ResolverType } from '@types';
import { middlewares } from '@middlewares';

export const createApolloServer = (
	typeDefs: SchemaType,
	resolvers: ResolverType
) => {
	const schema = makeExecutableSchema({
		typeDefs: [DIRECTIVES, typeDefs],
		resolvers
	});
	const schemaWithMiddlewares = applyMiddleware(schema, ...middlewares);

	return new ApolloServer({
		typeDefs,
		resolvers: resolvers,
		schema: schemaWithMiddlewares
	});
};
