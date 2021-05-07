type User = {
	readonly id?: string;
	name: string;
	email: string;
	password?: string;
	avatar?: string;
	created_at?: Date;
	updated_at?: Date;
};

type UserChanged = {
	message: string;
	code: number;
	user: User;
};

type UserList = {
	count: number;
	code: number;
	users: User[];
};

type UserShow = {
	code: number;
	user: User;
};

export { User, UserChanged, UserList, UserShow };
