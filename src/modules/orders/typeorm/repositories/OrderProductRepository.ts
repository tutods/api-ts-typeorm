import { OrderProduct } from '@modules/orders/typeorm/entities/OrderProduct';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(OrderProduct)
class OrderProductRepository extends Repository<OrderProduct> {}

export { OrderProductRepository };
