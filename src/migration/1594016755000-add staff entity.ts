import {MigrationInterface, QueryRunner} from "typeorm";

export class addStaffEntity1594016755000 implements MigrationInterface {
    name = 'addStaffEntity1594016755000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `staff` (`id` int NOT NULL AUTO_INCREMENT, `userName` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `role` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `staff`");
    }

}
