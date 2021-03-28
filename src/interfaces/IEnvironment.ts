export interface IServerEnv {
	host: string;
	port: number;
}

export interface IDatabaseEnv {
	host: string;
	port: number;
	user: {
		username: string;
		password: string;
	};
	database: string;
}

export interface IAuthEnv {
	salt: number;
	secret: string;
	expires: string;
	emailToken: {
		expires: number;
		time: string;
	};
}

export interface IRedisEnv {
	host: string;
	port: number;
	password: string;
}
