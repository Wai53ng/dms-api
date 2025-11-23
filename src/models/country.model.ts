import { BaseModel } from '../_base/models/base.model';
import { Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'country',
})
export class Country extends BaseModel {
  @Column({
    type: DataType.STRING(6),
    unique: true,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  name: string;
}
