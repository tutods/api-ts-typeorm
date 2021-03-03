import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
	public async fidByName(name: string): Promise<Product | undefined> {
		const product = this.findOne({ name });

		return product;
	}
}

export { ProductRepository };
