import { createConnection } from 'typeorm';
import { databaseConfig } from './../../config/database';

createConnection(databaseConfig)
	.then(() => {
		console.log('📀 Database connected with success!');
	})
	.catch((err) => {
		console.log(`❌ Error connecting to database: ${err}`);
	});
