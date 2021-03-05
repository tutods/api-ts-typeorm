import {
	Column,
	CreateDateColumn,
	Entity,
	Generated,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { User } from './User';

@Entity('user_tokens')
class UserToken {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column()
	@Generated('uuid')
	token: string;

	@Column()
	user_id: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}

export { UserToken };
