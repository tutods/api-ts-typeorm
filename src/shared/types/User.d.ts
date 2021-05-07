type UserType = {
	readonly id?: string;
	name: string;
	email: string;
	password?: string;
	avatar?: string;
	created_at?: Date;
	updated_at?: Date;
};

type UserChangedType = {
	message: string;
	code: number;
	user: UserType;
};

type UserListType = {
	count: number;
	code: number;
	users: UserType[];
};

type UserShowType = {
	code: number;
	user: UserType;
};

export { UserType, UserChangedType, UserListType, UserShowType };
