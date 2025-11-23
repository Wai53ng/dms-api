import { BaseModel } from '../_base/models/base.model';
import { Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'role',
})
export class Role extends BaseModel {
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

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  remarks: string;
}
