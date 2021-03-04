interface IUser {
	id?: string;
	name: string;
	email: string;
	password?: string;
	avatar?: string;
	created_at?: Date;
	updated_at?: Date;
}

interface IUserChanged {
	message: string;
	code: number;
	user: IUser;
}

interface IUserList {
	count: number;
	code: number;
	users: IUser[];
}

interface IUserShow {
	code: number;
	user: IUser;
}

export { IUser, IUserChanged, IUserList, IUserShow };
