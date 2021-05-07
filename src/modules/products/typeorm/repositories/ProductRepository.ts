import { EntityRepository, In, Repository } from 'typeorm';
import { Product } from '../entities/Product';

type FindAllProducts = {
	id: string;
};

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
	public async findByName(name: string): Promise<Product | undefined> {
		const product = this.findOne({ name });

		return product;
	}

	public async findAllByIds(products: FindAllProducts[]): Promise<Product[]> {
		const productsIds = products.map((product) => product.id);

		const existsProducts = await this.find({
			where: {
				id: In(productsIds)
			}
		});

		return existsProducts;
	}
}

export { ProductRepository };
