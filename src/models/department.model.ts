import { Table, Column, DataType } from 'sequelize-typescript';
import { BaseModel } from '../_base/models/base.model';
import { constant } from '../config/constant';

@Table({
  tableName: 'department',
})
export class Department extends BaseModel {
  @Column({
    type: DataType.STRING(6),
    unique: true,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  name: string;

  @Column({ type: DataType.STRING(500), allowNull: true })
  remarks: string;

  @Column({ type: DataType.STRING(1), defaultValue: constant.DEPARTMENT.STATUS.ACTIVE })
  status: string;
}
