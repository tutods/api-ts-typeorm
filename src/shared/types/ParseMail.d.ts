type TemplateVariableType = {
	[key: string]: string | number;
};

type ParseMailType = {
	file: string;
	variables: TemplateVariableType;
};

export { ParseMailType };
