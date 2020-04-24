import { gql } from 'apollo-server';
import { userGraphQLSchema } from './user';

export const graphqlSchemas = gql`
	scalar DateTime

	# directives

	type Query {
		_empty: String
	}
	type Mutation {
		_empty: String
	}
	type Subscription {
		_empty: String
	}

	${userGraphQLSchema}
`;
