import { createConnection } from 'typeorm';

createConnection()
	.then(() => {
		console.log('📀 Database connected with success!');
	})
	.catch((err) => {
		console.log(`❌ Error connecting to database: ${err}`);
	});
