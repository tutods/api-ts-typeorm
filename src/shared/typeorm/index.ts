import { ConnectionOptions, createConnection } from 'typeorm';

const connectionOptions: ConnectionOptions = {
	name: 'default',
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'tutods2014',
	database: 'api',
	synchronize: true,
	entities: ['src/modules/**/typeorm/entities/*.ts'],
	migrations: ['src/shared/typeorm/migrations/*.ts'],
	cli: {
		entitiesDir: 'src/modules/**/typeorm/entities',
		migrationsDir: 'src/shared/typeorm/migrations/*.ts'
	}
};

createConnection(connectionOptions);
