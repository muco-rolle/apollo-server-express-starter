import dotenv from 'dotenv';
import { join } from 'path';

export const path = join(process.cwd(), `.env.${process.env['NODE_ENV']}`);

dotenv.config({ path });

export const env = {
	get(key: string): string {
		return process.env[key.toUpperCase()];
	}
};
