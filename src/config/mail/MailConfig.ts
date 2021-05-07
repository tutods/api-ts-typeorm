import { mailEnv } from '@config/environment';
import { SendMailType } from '@shared/types/SendMail';
import { EtherealMail } from './EtherealMail';
import { SMTPEmail } from './SMTPMail';

class MailConfig {
	static async sendMail({ to, subject, templateData }: SendMailType) {
		if (mailEnv.driver === 'smtp') {
			new SMTPEmail().sendMail({ to, subject, templateData });
		} else {
			new EtherealMail().sendMail({
				to,
				subject,
				templateData
			});
		}
	}
}

export { MailConfig };
