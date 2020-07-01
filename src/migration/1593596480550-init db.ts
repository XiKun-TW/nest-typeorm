import {MigrationInterface, QueryRunner} from "typeorm";

export class initDb1593596480550 implements MigrationInterface {
    name = 'initDb1593596480550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `middleName` varchar(255) NULL, `lastName` varchar(255) NOT NULL, `isMale` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
