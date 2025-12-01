import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL && (!process.env.DATABASE_HOST || !process.env.DATABASE_NAME))
	throw new Error('Database config missing');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: process.env.DATABASE_URL
		? { url: process.env.DATABASE_URL }
		: {
				host: process.env.DATABASE_HOST!,
				database: process.env.DATABASE_NAME!
			},
	verbose: true,
	strict: true
});
