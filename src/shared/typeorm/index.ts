import { databaseConfig } from '@config/database';
import { createConnection } from 'typeorm';

createConnection(databaseConfig)
	.then(() => {
		console.log('📀 Database connected with success!');
	})
	.catch((err) => {
		console.log(`❌ Error connecting to database: ${err}`);
	});
