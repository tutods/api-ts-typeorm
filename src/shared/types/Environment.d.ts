type ServerEnv = {
	host: string;
	port: number;
};

type DatabaseEnv = {
	host: string;
	port: number;
	user: {
		username: string;
		password: string;
	};
	database: string;
};

type AuthEnv = {
	salt: number;
	secret: string;
	expires: string;
	emailToken: {
		expires: number;
		time: string;
	};
};

type RedisEnv = {
	host: string;
	port: number;
	password: string;
};

type MailEnv = {
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

export { ServerEnv, DatabaseEnv, AuthEnv, RedisEnv, MailEnv };
