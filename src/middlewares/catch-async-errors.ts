import { error, logger, checkProperty } from '@utils';
import e from 'express';

export const catchAsyncErrorsMiddleware = async (
	resolve,
	root,
	args,
	context,
	info
) => {
	try {
		return await resolve(root, args, context, info);
	} catch (err) {
		const { extensions } = err;

		if (checkProperty(err, 'code') && err.code === 11000) {
			logger.error(err);
			throw error(`User is already registered.`, '400');
		} else if (
			checkProperty(err.extensions, 'code') &&
			extensions.code !== '500'
		) {
			console.log({ message: err.message, code: err.extensions.code });
			throw error(err.message, err.extensions.code);
		} else {
			throw error('Internal Server Error', '500');
		}
	}
};
