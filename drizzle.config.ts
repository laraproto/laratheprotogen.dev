import { defineConfig } from 'drizzle-kit';
import * as fs from 'fs';
import * as path from 'path';

if (!process.env.DATABASE_URL && (!process.env.DATABASE_HOST || !process.env.DATABASE_NAME))
	throw new Error('Database config missing');

const certificate = process.env.DATABASE_CA
	? fs.readFileSync(process.env.DATABASE_CA).toString()
	: undefined;

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: process.env.DATABASE_URL
		? {
				url: process.env.DATABASE_URL,
				ssl: {
					rejectUnauthorized: true,
					ca: certificate
				}
			}
		: {
				host: process.env.DATABASE_HOST!,
				database: process.env.DATABASE_NAME!
			},
	verbose: true,
	strict: true
});
