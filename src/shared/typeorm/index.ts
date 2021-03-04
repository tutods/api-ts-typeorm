import { ConnectionOptions, createConnection } from 'typeorm';
import { databaseEnv } from './../../config/environment';

const { host, port, user, database } = databaseEnv;

const connectionOptions: ConnectionOptions = {
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
		migrationsDir: 'src/shared/typeorm/migrations'
	}
};

createConnection(connectionOptions);
