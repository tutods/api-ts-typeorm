type Product = {
	readonly id?: string;
	name: string;
	price: number;
	quantity: number;
	created_at?: Date;
	updated_at?: Date;
};

type ProductChanged = {
	message: string;
	code: number;
	product: Product;
};

type ProductList = {
	count: number;
	code: number;
	products: Product[];
};

type ProductShow = {
	code: number;
	product: Product;
};

export { Product, ProductChanged, ProductList, ProductShow };
