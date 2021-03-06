import { OrderProduct } from '@modules/orders/typeorm/entities/OrderProduct';
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity('products')
class Product {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column()
	name: string;

	@Column('decimal')
	price: number;

	@Column('int')
	quantity: number;

	@OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product, {
		cascade: true
	})
	order_products: OrderProduct[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}

export { Product };
