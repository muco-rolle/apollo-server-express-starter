import { ApolloError } from 'apollo-server';

// simplify the apollo error class
export const error = (message: string, code: string) =>
	new ApolloError(message, code);

export const mergeResolvers = (...resolvers: any) => [...resolvers];
