import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey
} from 'typeorm';

export class AddCustomerIdToOrders1615044706962 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'orders',
			new TableColumn({
				name: 'customer_id',
				type: 'uuid',
				isNullable: true
			})
		);

		await queryRunner.createForeignKey(
			'orders',
			new TableForeignKey({
				name: 'order_customer_fk',
				columnNames: ['customer_id'],
				referencedTableName: 'customers',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('orders', 'order_customer_fk');

		await queryRunner.dropColumn('orders', 'customer_id');
	}
}
