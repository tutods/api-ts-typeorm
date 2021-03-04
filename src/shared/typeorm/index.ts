import { createConnection } from 'typeorm';
import { databaseConfig } from './../../config/database';

createConnection(databaseConfig).then(() => {
	console.log('Database connected with success!');
});
