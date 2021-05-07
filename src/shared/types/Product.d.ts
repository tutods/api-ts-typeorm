type ProductType = {
	readonly id?: string;
	name: string;
	price: number;
	quantity: number;
	created_at?: Date;
	updated_at?: Date;
};

type ProductChangedType = {
	message: string;
	code: number;
	product: ProductType;
};

type ProductListType = {
	count: number;
	code: number;
	products: ProductType[];
};

type ProductShowType = {
	code: number;
	product: ProductType;
};

export { ProductType, ProductChangedType, ProductListType, ProductShowType };
