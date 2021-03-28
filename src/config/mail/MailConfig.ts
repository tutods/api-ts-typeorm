import { mailEnv } from '@config/environment';
import { ISendMail } from '@interfaces/ISendMail';
import { EtherealMail } from './EtherealMail';
import { SMTPEmail } from './SMTPMail';

class MailConfig {
	// constructor() {}

	static async sendMail({ to, subject, templateData }: ISendMail) {
		if (mailEnv.driver === 'smtp') {
			new SMTPEmail().sendMail({ to, subject, templateData });
		} else {
			EtherealMail.sendMail({
				to,
				subject,
				templateData
			});
		}
	}
}

export { MailConfig };
