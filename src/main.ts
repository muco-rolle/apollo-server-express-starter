import express from 'express';
import { createApolloServer, runMongoDB } from '@config';
import { graphqlSchemas } from '@modules/graphql-schemas';
import { resolvers } from '@modules/resolvers';
import { env, logger } from '@utils';

function main() {
	const port = env.get('app_port');
	const url = env.get('app_url');

	// Init express server
	const app = express();

	const apolloServer = createApolloServer(graphqlSchemas, resolvers);

	apolloServer.applyMiddleware({ app, path: '/graphql' });

	runMongoDB();
	app.listen(port, () => logger.success(`[server] running at ${url}`));
}

main();
