import {MigrationInterface, QueryRunner} from "typeorm";

export class addBookEneity1594001460274 implements MigrationInterface {
    name = 'addBookEneity1594001460274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `book` ADD CONSTRAINT `FK_04f66cf2a34f8efc5dcd9803693` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `book` DROP FOREIGN KEY `FK_04f66cf2a34f8efc5dcd9803693`");
        await queryRunner.query("DROP TABLE `book`");
    }

}
