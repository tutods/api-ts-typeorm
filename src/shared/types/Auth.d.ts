type AuthUserType = {
	readonly id?: string;
	name: string;
	email: string;
	password?: string;
	avatar?: string;
	created_at?: Date;
	updated_at?: Date;
};

type AuthSessionType = {
	code: number;
	message: string;
	token: string;
	user: AuthUserType;
};

export { AuthSessionType };
