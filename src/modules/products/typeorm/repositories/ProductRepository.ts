import { EntityRepository, In, Repository } from 'typeorm';
import { Product } from '../entities/Product';

interface IFindAllProducts {
	id: string;
}

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
	public async fidByName(name: string): Promise<Product | undefined> {
		const product = this.findOne({ name });

		return product;
	}

	public async findAllByIds(
		products: IFindAllProducts[]
	): Promise<Product[]> {
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
