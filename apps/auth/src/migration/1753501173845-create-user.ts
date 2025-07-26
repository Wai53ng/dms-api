import { MigrationInterface, QueryRunner } from 'typeorm';
import { constant } from '../../../../libs/config/src/constant';
import { User } from '../entity/user.entity';

export class CreateUser1753501173845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = '$2b$04$EcXG.YFCtpSsHvkyEOeLpuaKaO3tRFZGSkpxLTNb3s4fTcp6bPP8K';

    const user = new User();
    user.username = 'sysadm';
    user.status = constant.USER.STATUS.ACTIVE;
    user.password = password;
    user.createdBy = 'root';

    await queryRunner.manager.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
