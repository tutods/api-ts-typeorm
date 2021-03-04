import { ConnectionOptions } from 'typeorm';
import { databaseEnv } from './environment';
const { host, port, user, database } = databaseEnv;

export const databaseConfig: ConnectionOptions = {
	name: 'default',
	type: 'postgres',
	host: host,
	port: port,
	username: user.username,
	password: user.password,
	database: database,
	synchronize: true,
	entities: ['src/modules/**/typeorm/entities/*.ts'],
	migrations: ['src/shared/typeorm/migrations/*.ts']
};
