import { ParseMail } from './ParseMail';

type MailContact = {
	name: string;
	email: string;
};

type SendMail = {
	to: MailContact;
	subject: string;
	templateData: ParseMail;
};

export { MailContact, SendMail };
