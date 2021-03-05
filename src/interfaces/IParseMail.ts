interface ITemplateVariable {
	[key: string]: string | number;
}

export interface IParseMail {
	file: string;
	variables: ITemplateVariable;
}
