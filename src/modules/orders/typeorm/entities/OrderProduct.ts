import { Product } from '@modules/products/typeorm/entities/Product';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { Order } from './Order';

@Entity('orders_products')
class OrderProduct {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column('decimal')
	price: number;

	@Column('int')
	quantity: number;

	@Column()
	order_id: string;

	@ManyToOne(() => Order, (order) => order.order_products)
	@JoinColumn({ name: 'order_id' })
	order: Order;

	@Column()
	product_id: string;

	@ManyToOne(() => Product, (product) => product.order_products)
	@JoinColumn({ name: 'product_id' })
	product: Product;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}

export { OrderProduct };
