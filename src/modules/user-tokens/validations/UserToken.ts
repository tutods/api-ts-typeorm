import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity('user_tokens')
class UserToken {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column()
	token: string;

	@Column()
	user_id: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}

export { UserToken };
