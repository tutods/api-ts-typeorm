interface IAuthUser {
	id?: string;
	name: string;
	email: string;
	password?: string;
	avatar?: string;
	created_at?: Date;
	updated_at?: Date;
}

interface IAuthSession {
	code: number;
	message: string;
	token: string;
	user: IAuthUser;
}

export { IAuthSession };
