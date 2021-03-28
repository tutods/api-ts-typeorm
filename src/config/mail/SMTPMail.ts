import { mailEnv } from '@config/environment';
import { ISendMail } from '@interfaces/ISendMail';
import { AppError } from '@shared/errors/AppError';
import { loggingError } from '@utils/logging';
import { createTransport, Transporter } from 'nodemailer';
import { HandlebarsMailTemplate } from './HandlebarsMailTemplate';

class SMTPEmail {
	private transporter: Transporter;
	private mailTemplate = new HandlebarsMailTemplate();

	constructor() {
		this.transporter = createTransport({
			host: mailEnv.smtp.host,
			port: mailEnv.smtp.port,
			secure: mailEnv.smtp.secure,
			auth: {
				user: mailEnv.mail,
				pass: mailEnv.password
			}
		});
	}

	public async sendMail({
		to,
		subject,
		templateData
	}: ISendMail): Promise<void> {
		try {
			await this.transporter.sendMail({
				from: {
					name: mailEnv.from.name,
					address: mailEnv.from.email
				},
				to: {
					name: to.name,
					address: to.email
				},
				subject,
				html: await this.mailTemplate.parse(templateData)
			});
		} catch (err) {
			loggingError(err);
			throw new AppError(`Have an error sending email to ${to.email}`);
		}
	}
}

export { SMTPEmail };
