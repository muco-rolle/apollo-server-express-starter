import { ApolloServer } from 'apollo-server-express';
import { SchemaType, ResolverType } from '@types';

export const createApolloServer = (
	typeDefs: SchemaType,
	resolver: ResolverType
) => {
	return new ApolloServer({ typeDefs, resolvers: resolver });
};
