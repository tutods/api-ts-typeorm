import { Request, Response } from 'express';
import { CreateSessionService } from '../services/CreateSessionService';

class SessionController {
	public async create(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		const createSession = new CreateSessionService();

		const result = await createSession.execute({ email, password });

		return res.status(result.code).json(result);
	}
}

export { SessionController };
