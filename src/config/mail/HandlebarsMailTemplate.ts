import { ParseMail } from '@shared/types/ParseMail';
import fs from 'fs';
import handlebars from 'handlebars';

class HandlebarsMailTemplate {
	public async parse({ file, variables }: ParseMail): Promise<string> {
		const template = await fs.promises.readFile(file, {
			encoding: 'utf-8'
		});

		const parseTemplate = handlebars.compile(template);

		return parseTemplate(variables);
	}
}

export { HandlebarsMailTemplate };
