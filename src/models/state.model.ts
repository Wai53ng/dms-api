import { BaseModel } from '../_base/models/base.model';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Country } from './country.model';

@Table({
  tableName: 'state',
})
export class State extends BaseModel {
  @Column({
    type: DataType.STRING(6),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Country)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;
}
