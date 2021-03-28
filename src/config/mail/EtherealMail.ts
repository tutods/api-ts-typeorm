import { mailEnv } from '@config/environment';
import { ISendMail } from '@interfaces/ISendMail';
import { logging } from '@utils/logging';
import nodemailer, { TestAccount, Transporter } from 'nodemailer';
import { HandlebarsMailTemplate } from './HandlebarsMailTemplate';

class EtherealMail {
	private transporter: Transporter;
	private testAccount: TestAccount;
	private mailTemplate = new HandlebarsMailTemplate();

	// Method to create transporter and test account
	private async setup() {
		this.testAccount = await nodemailer.createTestAccount();
		this.transporter = nodemailer.createTransport({
			host: this.testAccount.smtp.host,
			port: this.testAccount.smtp.port,
			secure: this.testAccount.smtp.secure,
			auth: {
				user: this.testAccount.user,
				pass: this.testAccount.pass
			}
		});
	}

	public async sendMail({
		to,
		subject,
		templateData
	}: ISendMail): Promise<void> {
		await this.setup();

		const message = await this.transporter.sendMail({
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

		// Message ID
		logging(`📤 Message ID: ${message.messageId}`);
		// Ethereal URL
		logging(`✉️ Preview Url: ${nodemailer.getTestMessageUrl(message)}`);
	}
}

export { EtherealMail };
