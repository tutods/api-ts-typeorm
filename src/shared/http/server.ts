import { serverEnv } from '@config/environment';
import express from 'express';
import cors from 'cors'

const { port } = serverEnv;

const app = express();

app
	.use(cors())
	.use(express.json())
	.listen(port, () => {
		console.log(`Server running on port ${port} 😎`)
	});
