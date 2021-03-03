interface IProduct {
	id?: string;
	name: string;
	price: number;
	quantity: number;
	created_at?: Date;
	updated_at?: Date;
}

interface IProductChanged {
	message: string;
	code: number;
	product: IProduct;
}

interface IProductList {
	count: number;
	code: number;
	products: IProduct[];
}

interface IProductShow {
	code: number;
	product: IProduct;
}

export { IProduct, IProductChanged, IProductList, IProductShow };
