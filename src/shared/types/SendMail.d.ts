import { ParseMail } from './ParseMail';

type MailContactType = {
	name: string;
	email: string;
};

type SendMailType = {
	to: MailContactType;
	subject: string;
	templateData: ParseMail;
};

export { MailContactType, SendMailType };
