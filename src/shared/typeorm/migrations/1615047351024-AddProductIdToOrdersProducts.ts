import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey
} from 'typeorm';

export class AddProductIdToOrdersProducts1615047351024
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'orders_products',
			new TableColumn({
				name: 'product_id',
				type: 'uuid',
				isNullable: true
			})
		);

		await queryRunner.createForeignKey(
			'orders_products',
			new TableForeignKey({
				name: 'orders_products_product_fk',
				columnNames: ['product_id'],
				referencedTableName: 'products',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'orders_products',
			'orders_products_product_fk'
		);

		await queryRunner.dropColumn('orders_products', 'product_id');
	}
}
