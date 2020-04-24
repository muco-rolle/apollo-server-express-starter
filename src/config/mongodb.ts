import { connect } from 'mongoose';
import { logger, env } from '@utils';

export async function runMongoDB() {
	try {
		/**
		 * Setup mongodb connection
		 */
		const uri = env.get('mongo_uri');

		const mongodbOptions = {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		};

		await connect(uri, mongodbOptions);
		logger.success(
			`[database] ready at mongodb://127.0.0.1:27017/devworkshop`
		);
	} catch (error) {
		logger.error(error);
	}
}
