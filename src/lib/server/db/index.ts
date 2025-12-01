import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL && (!env.DATABASE_HOST || !env.DATABASE_NAME))
	throw new Error('Database config missing');

let client: ReturnType<typeof postgres> | null = null;

if (env.DATABASE_URL) {
	client = postgres(env.DATABASE_URL);
} else {
	client = postgres({
		host: env.DATABASE_HOST,
		database: env.DATABASE_NAME
	});
}

export const db = drizzle(client!, { schema });
