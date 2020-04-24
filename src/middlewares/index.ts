import { catchAsyncErrorsMiddleware } from './catch-async-errors';
import { mergeMiddlawares } from '@utils';

export const middlewares = mergeMiddlawares(catchAsyncErrorsMiddleware);
