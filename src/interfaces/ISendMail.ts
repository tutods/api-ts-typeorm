import { IParseMail } from './IParseMail';

interface IMailContact {
	name: string;
	email: string;
}

export interface ISendMail {
	to: IMailContact;
	subject: string;
	templateData: IParseMail;
}
