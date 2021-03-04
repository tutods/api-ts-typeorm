declare namespace Express {
	export interface Request {
		user: {
			id: string;
			name: string;
			email: string;
			avatar?: string;
			created_at: string;
			update_at: string;
		};
	}
}
