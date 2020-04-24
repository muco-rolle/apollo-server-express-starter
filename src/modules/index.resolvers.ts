import { mergeResolvers } from '@utils';
import { userResolver } from './user';

export const resolvers = mergeResolvers(userResolver);
