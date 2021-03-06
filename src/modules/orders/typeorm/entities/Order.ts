import { Customer } from '@modules/customers/typeorm/entities/Customer';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { OrderProduct } from './OrderProduct';

@Entity('orders')
class Order {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column()
	customer_id: string;

	@ManyToOne(() => Customer)
	@JoinColumn({ name: 'customer_id' })
	customer: Customer;

	@OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
		cascade: true
	})
	order_products: OrderProduct[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}

export { Order };
