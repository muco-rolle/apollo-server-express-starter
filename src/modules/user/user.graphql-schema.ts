import { gql } from 'apollo-server';

export const userGraphQLSchema = gql`
	type User {
		id: ID!
		username: String!
		email: String!
		password: String
		active: String
		code: String
		codeExpireTime: String
		createdAt: DateTime!
		updatedAt: DateTime!
	}

	extend type Query {
		hello: String
	}
`;
