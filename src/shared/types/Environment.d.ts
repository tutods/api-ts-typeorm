type ServerEnvType = {
	host: string;
	port: number;
};

type DatabaseEnvType = {
	host: string;
	port: number;
	user: {
		username: string;
		password: string;
	};
	database: string;
};

type AuthEnvType = {
	salt: number;
	secret: string;
	expires: string;
	emailToken: {
		expires: number;
		time: string;
	};
};

type RedisEnvType = {
	host: string;
	port: number;
	password: string;
};

type MailEnvType = {
	driver: string;
	mail?: string;
	password?: string;
	smtp: {
		host: string;
		port: number;
		secure: boolean;
	};
	from: {
		email: string;
		name: string;
	};
};

export {
	ServerEnvType,
	DatabaseEnvType,
	AuthEnvType,
	RedisEnvType,
	MailEnvType
};
