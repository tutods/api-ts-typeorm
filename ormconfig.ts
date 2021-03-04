import { databaseEnv } from './src/config/environment';
const { host, port, user, database } = databaseEnv;

export default {
	name: 'default',
	type: 'postgres',
	host: host,
	port: port,
	username: user.username,
	password: user.password,
	database: database,
	synchronize: true,
	entities: ['src/modules/**/typeorm/entities/*.ts'],
	migrations: ['src/shared/typeorm/migrations/*.ts'],
	cli: {
		entitiesDir: 'src/modules/**/typeorm/entities',
		migrationsDir: './src/shared/typeorm/migrations'
	}
};
