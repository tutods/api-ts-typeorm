type TemplateVariable = {
	[key: string]: string | number;
};

type ParseMail = {
	file: string;
	variables: TemplateVariable;
};

export { ParseMail };
