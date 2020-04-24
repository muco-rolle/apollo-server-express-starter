import { graphqlSchemas } from '@modules/graphql-schemas';
import { resolvers } from 'modules/index.resolvers';

export interface IContext {}
export type SchemaType = typeof graphqlSchemas;
export type ResolverType = typeof resolvers;
