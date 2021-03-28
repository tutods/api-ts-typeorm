import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { ResetPasswordService } from '../services/ResetPasswordService';
import { SendForgotPasswordService } from '../services/SendForgotPasswordService';

class PasswordController {
	public async forgot(req: Request, res: Response) {
		const { email } = req.body;

		const sendForgotPasswordEmail = new SendForgotPasswordService();

		await sendForgotPasswordEmail.execute({
			email
		});

		return res.status(204).json();
	}

	public async reset(req: Request, res: Response) {
		const { password } = req.body;
		const { token } = req.params;

		const resetPasswordService = new ResetPasswordService();

		const result = await resetPasswordService.execute({
			token: token,
			password
		});

		return res.status(result.code).json(classToClass(result));
	}
}

export { PasswordController };
