type AuthUser = {
	readonly id?: string;
	name: string;
	email: string;
	password?: string;
	avatar?: string;
	created_at?: Date;
	updated_at?: Date;
};

type AuthSession = {
	code: number;
	message: string;
	token: string;
	user: IAuthUser;
};

export { AuthSession };
