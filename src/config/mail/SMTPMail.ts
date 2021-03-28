import { mailEnv } from '@config/environment';
import { ISendMail } from '@interfaces/ISendMail';
import { logging, loggingError } from '@utils/logging';
import { createTransport, Transporter } from 'nodemailer';
import { HandlebarsMailTemplate } from './HandlebarsMailTemplate';

class SMTPEmail {
	private transporter: Transporter;

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
		const mailTemplate = new HandlebarsMailTemplate();

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
				html: await mailTemplate.parse(templateData)
			});

			logging(`📤 Email send with success to ${to.email}`);
		} catch (err) {
			loggingError(err);
		}
	}
}

export { SMTPEmail };
