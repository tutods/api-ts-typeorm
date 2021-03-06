import { Customer } from '@modules/customers/typeorm/entities/Customer';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity('orders')
class Order {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column()
	customer_id: string;

	@ManyToOne(() => Customer)
	@JoinColumn({ name: 'customer_id' })
	customer: Customer;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}

export { Order };
