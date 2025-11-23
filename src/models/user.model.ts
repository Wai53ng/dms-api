import { BaseModel } from '../_base/models/base.model';
import { Column, DataType, Table } from 'sequelize-typescript';
import { constant } from '../config/constant';

@Table({
  tableName: 'user',
})
export class User extends BaseModel {
  @Column({
    type: DataType.STRING(15),
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING(1),
    defaultValue: constant.USER.STATUS.ACTIVE,
  })
  status: string;

  @Column({
    type: DataType.SMALLINT,
    defaultValue: 0,
  })
  loginAttempt?: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  lastLoginDate?: Date;
}
