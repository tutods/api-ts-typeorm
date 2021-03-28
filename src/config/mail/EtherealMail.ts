import { ISendMail } from '@interfaces/ISendMail';
import { logging } from '@utils/logging';
import nodemailer from 'nodemailer';
import { HandlebarsMailTemplate } from './HandlebarsMailTemplate';

class EtherealMail {
	static async sendMail({
		from,
		to,
		subject,
		templateData
	}: ISendMail): Promise<void> {
		const account = await nodemailer.createTestAccount();
		const transporter = nodemailer.createTransport({
			host: account.smtp.host,
			port: account.smtp.port,
			secure: account.smtp.secure,
			auth: {
				user: account.user,
				pass: account.pass
			}
		});

		const mailTemplate = new HandlebarsMailTemplate();

		const message = await transporter.sendMail({
			from: {
				name: from.name,
				address: from.email
			},
			to: {
				name: to.name,
				address: to.email
			},
			subject,
			html: await mailTemplate.parse(templateData)
		});

		logging(`📤 Message ID: ${message.messageId}`);
		logging(`✉️ Preview Url: ${nodemailer.getTestMessageUrl(message)}`);
	}
}

export { EtherealMail };
