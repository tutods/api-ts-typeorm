export const loggingInfo = (message: string): void => {
	console.log(`\x1b[34m[${getTimeStamp()}] ${message}\x1B[37m`);
};

export const logging = (message: string): void => {
	console.log(`${getTimeStamp()}] ${message}`);
};

export const loggingWarn = (message: string): void => {
	console.log(`\x1b[33m[${getTimeStamp()}] ${message}\x1B[37m`);
};

export const loggingError = (message: string): void => {
	console.log(
		`\x1b[31m[${getTimeStamp()}] \x1B[1m[ERROR]\x1B[0m\x1b[31m ${message}\x1B[37m`
	);
};

export const loggingDebug = (message: string): void => {
	console.log(`\x1b[35m[${getTimeStamp()}] [DEBUG] ${message}\x1B[37m`);
};

const getTimeStamp = (): string => {
	const date = new Date();

	const day = ('0' + date.getDate()).slice(-2);
	const month = ('0' + (date.getMonth() + 1)).slice(-2);

	const dateString = `${day}/${month}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return dateString;
};
