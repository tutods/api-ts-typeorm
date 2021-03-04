export interface IServerEnv {
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
